'use client';

interface LandingPageProps {
  onClick: () => void;
}

export default function LandingPage({ onClick }: LandingPageProps) {
  return (
    <div>
      <h1>The Adventurer's Log</h1>
      <button onClick={onClick}>Continue</button>
    </div>
  );
}