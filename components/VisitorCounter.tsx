"use client";

import { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";

export default function VisitorCounter() {
  const [totalVisitors, setTotalVisitors] = useState<number>(0);
  const [todayVisitors, setTodayVisitors] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize counters from localStorage
    const storedTotal = localStorage.getItem("nmp-total-visitors");
    const storedToday = localStorage.getItem("nmp-today-visitors");
    const lastVisitDate = localStorage.getItem("nmp-last-visit-date");
    const today = new Date().toISOString().split("T")[0];

    let total = storedTotal ? parseInt(storedTotal) : 0;
    let todayCount = storedToday ? parseInt(storedToday) : 0;

    // Check if it's a new day - reset today counter
    if (lastVisitDate !== today) {
      todayCount = 0;
      localStorage.setItem("nmp-last-visit-date", today);
    }

    // Check if this is a new visit (not refreshing immediately)
    const lastVisitTime = localStorage.getItem("nmp-last-visit-time");
    const now = Date.now();
    const timeSinceLastVisit = lastVisitTime ? now - parseInt(lastVisitTime) : Infinity;

    // Count as new visit if more than 30 minutes since last visit
    if (timeSinceLastVisit > 30 * 60 * 1000) {
      total += 1;
      todayCount += 1;
      
      localStorage.setItem("nmp-total-visitors", total.toString());
      localStorage.setItem("nmp-today-visitors", todayCount.toString());
      localStorage.setItem("nmp-last-visit-time", now.toString());
    }

    setTotalVisitors(total);
    setTodayVisitors(todayCount);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-6 text-emerald-300/50">
        <div className="flex items-center gap-2">
          <Eye size={14} className="animate-pulse" />
          <span className="text-xs font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      {/* Total Visitors */}
      <div className="flex items-center gap-2 rounded-full bg-emerald-900/50 px-3 py-1.5 backdrop-blur-sm">
        <Eye size={14} className="text-emerald-400" />
        <div className="flex flex-col">
          <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-300">
            Total Views
          </span>
          <span className="text-sm font-black text-white">
            {totalVisitors.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Today's Visitors */}
      <div className="flex items-center gap-2 rounded-full bg-emerald-800/50 px-3 py-1.5 backdrop-blur-sm">
        <TrendingUp size={14} className="text-emerald-300" />
        <div className="flex flex-col">
          <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-200">
            Today
          </span>
          <span className="text-sm font-black text-white">
            {todayVisitors.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
