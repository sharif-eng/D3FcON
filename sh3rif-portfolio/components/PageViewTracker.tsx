"use client";

import { useEffect } from "react";
import { trackPageView, trackUniqueVisitor } from "@/lib/analytics";

export default function PageViewTracker() {
  useEffect(() => {
    // Track page view
    trackPageView();
    
    // Track unique visitor (only increments once per browser)
    trackUniqueVisitor();
  }, []);

  return null; // This component doesn't render anything
}
