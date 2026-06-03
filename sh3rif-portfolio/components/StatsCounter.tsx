"use client";

import { useEffect, useState } from "react";
import statsData from "@/data/stats.json";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    ctf: 0,
    experience: 0,
  });

  const targetStats: Stat[] = statsData.stats;

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targetStats[0].value * progress),
        clients: Math.floor(targetStats[1].value * progress),
        ctf: Math.floor(targetStats[2].value * progress),
        experience: Math.floor(targetStats[3].value * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Set final values to ensure accuracy
        setCounts({
          projects: targetStats[0].value,
          clients: targetStats[1].value,
          ctf: targetStats[2].value,
          experience: targetStats[3].value,
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/30 text-center">
        <div className="text-4xl mb-2">{targetStats[0].icon}</div>
        <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
          {counts.projects}{targetStats[0].suffix}
        </div>
        <div className="text-gray-400 text-sm">{targetStats[0].label}</div>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
        <div className="text-4xl mb-2">{targetStats[1].icon}</div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {counts.clients}{targetStats[1].suffix}
        </div>
        <div className="text-gray-400 text-sm">{targetStats[1].label}</div>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
        <div className="text-4xl mb-2">{targetStats[2].icon}</div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {counts.ctf}{targetStats[2].suffix}
        </div>
        <div className="text-gray-400 text-sm">{targetStats[2].label}</div>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
        <div className="text-4xl mb-2">{targetStats[3].icon}</div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-2">
          {counts.experience}{targetStats[3].suffix}
        </div>
        <div className="text-gray-400 text-sm">{targetStats[3].label}</div>
      </div>
    </div>
  );
}
