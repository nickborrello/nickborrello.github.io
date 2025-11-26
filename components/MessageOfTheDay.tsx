import React, { useState, useEffect } from 'react';
import { Scroll, ChevronLeft, ChevronRight } from 'lucide-react';
import { GitHubActivityMessage, githubApiService } from '../services/githubApi';

interface MessageOfTheDayProps {
  className?: string;
}

const MessageOfTheDay: React.FC<MessageOfTheDayProps> = ({ className = '' }) => {
  const [messages, setMessages] = useState<GitHubActivityMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const activityMessages = await githubApiService.getRecentActivity();
        setMessages(activityMessages);
      } catch (error) {
        console.error('Failed to fetch GitHub activity:', error);
        // Fallback messages are handled in the service
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    if (messages.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, [messages.length, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  if (isLoading) {
    return (
      <div className={`absolute bottom-4 right-4 w-80 h-24 bg-slate-900/90 border border-slate-600 rounded-sm backdrop-blur-sm p-4 flex items-center justify-center ${className}`}>
        <div className="text-slate-400 text-sm font-cinzel animate-pulse">
          Loading messages...
        </div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className={`absolute bottom-4 right-4 w-80 h-24 bg-slate-900/90 border border-slate-600 rounded-sm backdrop-blur-sm p-4 flex items-center justify-center ${className}`}>
        <div className="text-slate-400 text-sm font-cinzel">
          No messages available
        </div>
      </div>
    );
  }

  const currentMessage = messages[currentIndex];

  return (
    <div
      className={`absolute bottom-4 right-4 w-80 h-24 bg-slate-900/90 border border-slate-600 rounded-sm backdrop-blur-sm overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-multiply pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 px-3 py-2 border-b border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scroll size={14} className="text-yellow-500" />
          <span className="text-yellow-500 text-xs font-cinzel font-bold tracking-widest">
            MESSAGE OF THE DAY
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={goToPrev}
            className="w-5 h-5 rounded-sm bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={10} />
          </button>
          <span className="text-slate-400 text-xs font-mono">
            {currentIndex + 1}/{messages.length}
          </span>
          <button
            onClick={goToNext}
            className="w-5 h-5 rounded-sm bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ChevronRight size={10} />
          </button>
        </div>
      </div>

      {/* Message Content */}
      <div className="relative z-10 p-3 flex-1 flex flex-col justify-center">
        <div className="text-slate-200 text-sm font-serif leading-relaxed mb-1">
          {currentMessage.message}
        </div>
        <div className="text-slate-500 text-xs font-mono">
          {currentMessage.timestamp}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-8000 ease-linear"
          style={{
            width: `${((currentIndex + 1) / messages.length) * 100}%`,
            animation: isHovered ? 'none' : `progress-${messages.length} 8s linear infinite`
          }}
        />
      </div>

      {/* Type Indicator */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full"
           style={{
             backgroundColor: currentMessage.type === 'commit' ? '#22c55e' :
                            currentMessage.type === 'pr' ? '#3b82f6' :
                            currentMessage.type === 'issue' ? '#f59e0b' :
                            currentMessage.type === 'repo' ? '#8b5cf6' : '#6b7280'
           }}
      />
    </div>
  );
};

export default MessageOfTheDay;