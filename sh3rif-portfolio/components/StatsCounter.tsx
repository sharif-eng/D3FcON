"use client";

import { useEffect, useState } from "react";

const GITHUB_RAW = "https://raw.githubusercontent.com/sharif-eng/D3FcON/main/sh3rif-portfolio/data";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export default function StatsCounter() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [counts, setCounts] = useState<number[]>([]);

  useEffect(() => {
    fetch(`${GITHUB_RAW}/stats.json?t=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        const loaded: Stat[] = data.stats || [];
        setStats(loaded);
        setCounts(loaded.map(() => 0));

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          setCounts(loaded.map((s) => Math.floor(s.value * progress)));
          if (currentStep >= steps) {
            clearInterval(timer);
            setCounts(loaded.map((s) => s.value));
          }
        }, interval);

        return () => clearInterval(timer);
      })
      .catch(() => {});
  }, []);

  if (!stats.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`bg-slate-800/50 p-6 rounded-lg border ${i === 0 ? "border-cyan-500/30" : "border-slate-700/50"} text-center`}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className={`text-3xl md:text-4xl font-bold mb-2 ${i === 0 ? "text-cyan-400" : "text-white"}`}>
            {counts[i] ?? 0}{stat.suffix}
          </div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
