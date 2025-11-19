'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LandingPage from '@/components/layout/LandingPage';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <motion.main
      className={isGameStarted ? 'flex min-h-screen flex-col items-center justify-center p-24 transition-all duration-1000 ease-in-out bg-zoomed-campfire' : 'flex min-h-screen flex-col items-center justify-center p-24 transition-all duration-1000 ease-in-out bg-distant-campfire'}
    >
      {isGameStarted ? (
        <MainLayout />
      ) : (
        <LandingPage onClick={() => setIsGameStarted(true)} />
      )}
    </motion.main>
  );
}
