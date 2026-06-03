"use client";

import { useEffect, useState } from "react";
import { Eye, Users, FolderOpen, Mail } from "lucide-react";
import { getAnalytics, type AnalyticsData } from "@/lib/analytics";

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    projectViews: 0,
    contactFormSubmissions: 0,
    lastUpdated: new Date().toISOString(),
  });

  useEffect(() => {
    // Load analytics on mount
    const data = getAnalytics();
    setAnalytics(data);

    // Optional: Refresh every 5 seconds
    const interval = setInterval(() => {
      const updatedData = getAnalytics();
      setAnalytics(updatedData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Page Views",
      value: analytics.pageViews,
      icon: Eye,
      color: "cyan",
    },
    {
      label: "Unique Visitors",
      value: analytics.uniqueVisitors,
      icon: Users,
      color: "purple",
    },
    {
      label: "Project Views",
      value: analytics.projectViews,
      icon: FolderOpen,
      color: "green",
    },
    {
      label: "Contact Inquiries",
      value: analytics.contactFormSubmissions,
      icon: Mail,
      color: "yellow",
    },
  ];

  const colorClasses = {
    cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
    purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
    green: "text-green-400 bg-green-500/20 border-green-500/30",
    yellow: "text-yellow-400 bg-yellow-500/20 border-yellow-500/30",
  };

  return (
    <div className="bg-slate-900/50 rounded-lg p-8 border border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Site Analytics</h3>
        <p className="text-gray-400 text-sm">
          Last updated: {new Date(analytics.lastUpdated).toLocaleTimeString()}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClass = colorClasses[stat.color as keyof typeof colorClasses];

          return (
            <div
              key={stat.label}
              className={`${colorClass} p-4 rounded-lg border`}
            >
              <Icon className="w-8 h-8 mb-2" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs opacity-80">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
        <p className="text-gray-400 text-sm">
          <strong className="text-white">Note:</strong> This is a client-side demo. 
          For production, integrate with Google Analytics, Vercel Analytics, or a custom backend 
          to track real visitor data across sessions.
        </p>
      </div>
    </div>
  );
}
