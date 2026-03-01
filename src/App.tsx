/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from './types';
import Home from './components/Home';
import Stats from './components/Stats';
import Log from './components/Log';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigateToStats={() => setCurrentScreen('stats')} onNavigateToLog={() => setCurrentScreen('log')} />;
      case 'stats':
        return <Stats onBack={() => setCurrentScreen('home')} />;
      case 'log':
        return <Log onClose={() => setCurrentScreen('home')} />;
      default:
        return <Home onNavigateToStats={() => setCurrentScreen('stats')} onNavigateToLog={() => setCurrentScreen('log')} />;
    }
  };

  return (
    <div className="flex h-screen w-full max-w-[430px] mx-auto flex-col bg-background-dark overflow-hidden border-x border-slate-800 relative">
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="shrink-0 border-t border-slate-800 bg-background-dark/80 backdrop-blur-md px-6 pb-8 pt-3 flex justify-between items-center z-50">
        <button 
          onClick={() => setCurrentScreen('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'home' ? 'text-primary' : 'text-slate-500'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentScreen === 'home' ? "'FILL' 1" : "" }}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </button>
        <button 
          onClick={() => setCurrentScreen('stats')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'stats' ? 'text-primary' : 'text-slate-500'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentScreen === 'stats' ? "'FILL' 1" : "" }}>leaderboard</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Stats</span>
        </button>
        <button 
          onClick={() => setCurrentScreen('log')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'log' ? 'text-primary' : 'text-slate-500'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentScreen === 'log' ? "'FILL' 1" : "" }}>add_circle</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Log</span>
        </button>
        <button 
          onClick={() => setCurrentScreen('profile')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === 'profile' ? 'text-primary' : 'text-slate-500'}`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentScreen === 'profile' ? "'FILL' 1" : "" }}>person</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
        </button>
      </nav>
    </div>
  );
}
