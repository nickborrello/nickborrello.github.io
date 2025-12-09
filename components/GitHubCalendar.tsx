import React, { useEffect, useState } from 'react';

interface Contribution {
    date: string;
    count: number;
    level: number; // 0-4
}

interface CalendarData {
    total: {
        lastYear: number;
    };
    contributions: Contribution[];
}

export const GitHubCalendar: React.FC = () => {
    const [data, setData] = useState<CalendarData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const CACHE_KEY = 'github_calendar_v1_nickborrello';
        const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

        const fetchData = async () => {
            // Check cache
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const { data: cachedData, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setData(cachedData);
                    setLoading(false);
                    return;
                }
            }

            try {
                const res = await fetch('https://github-contributions-api.jogruber.de/v4/nickborrello?y=last');
                if (!res.ok) throw new Error('API Error');
                const json = await res.json();

                setData(json);
                setLoading(false);

                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: json,
                    timestamp: Date.now()
                }));
            } catch (err) {
                console.error('Calendar load failed', err);
                // Fallback to cache if exists
                if (cached) setData(JSON.parse(cached).data);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading || !data) {
        return (
            <div className="h-24 w-full flex items-center justify-center border border-nier-dark/20 bg-nier-dark/5">
                <span className="animate-pulse text-xs font-tech tracking-widest opacity-50">LOADING SEQUENCE...</span>
            </div>
        );
    }

    // Process data for grid
    const contributions = data.contributions;
    const startDay = new Date(contributions[0].date).getDay(); // 0 = Sunday
    // Pad the start
    const padding = Array(startDay).fill(null);
    const allCells = [...padding, ...contributions];

    // SVG Layout Calculations
    const BLOCK_SIZE = 10;
    const GAP = 2;
    const STEP = BLOCK_SIZE + GAP;
    const WEEKS = Math.ceil(allCells.length / 7);
    const WIDTH = WEEKS * STEP - GAP;
    const HEIGHT = 7 * STEP - GAP;

    // Colors
    const getLevelFill = (level: number) => {
        switch (level) {
            case 0: return 'fill-nier-dark/5';
            case 1: return 'fill-nier-dark/30';
            case 2: return 'fill-nier-dark/50';
            case 3: return 'fill-nier-dark/70';
            case 4: return 'fill-nier-dark';
            default: return 'fill-nier-dark/5';
        }
    };

    return (
        <div className="w-full relative group">
            <div className="flex justify-between items-end mb-2 px-1">
                <div className="text-[10px] text-nier-dark/50 font-bold uppercase tracking-widest">
                    &gt; Visualized Data Stream // {data.total.lastYear} Contributions
                </div>
            </div>

            <div className="border border-nier-dark/20 bg-nier-dark/5 p-2">
                <svg
                    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                    className="w-full h-auto block"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {allCells.map((item, idx) => {
                        if (!item) return null;

                        const col = Math.floor(idx / 7);
                        const row = idx % 7;

                        return (
                            <rect
                                key={item.date}
                                x={col * STEP}
                                y={row * STEP}
                                width={BLOCK_SIZE}
                                height={BLOCK_SIZE}
                                rx={1}
                                className={`${getLevelFill(item.level)} transition-opacity hover:opacity-60 cursor-pointer`}
                            >
                                <title>{item.date}: {item.count} contributions</title>
                            </rect>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};
