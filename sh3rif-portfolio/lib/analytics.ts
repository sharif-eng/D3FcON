// Simple analytics tracking
// This stores data in localStorage for demonstration
// In production, you'd send this to a backend API

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  projectViews: number;
  contactFormSubmissions: number;
  lastUpdated: string;
}

const ANALYTICS_KEY = "sh3rif_analytics";

export function getAnalytics(): AnalyticsData {
  if (typeof window === "undefined") {
    return {
      pageViews: 0,
      uniqueVisitors: 0,
      projectViews: 0,
      contactFormSubmissions: 0,
      lastUpdated: new Date().toISOString(),
    };
  }

  const stored = localStorage.getItem(ANALYTICS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  return {
    pageViews: 0,
    uniqueVisitors: 0,
    projectViews: 0,
    contactFormSubmissions: 0,
    lastUpdated: new Date().toISOString(),
  };
}

export function saveAnalytics(data: AnalyticsData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
}

export function trackPageView() {
  const data = getAnalytics();
  data.pageViews++;
  data.lastUpdated = new Date().toISOString();
  saveAnalytics(data);
}

export function trackUniqueVisitor() {
  if (typeof window === "undefined") return;
  
  const visitorKey = "sh3rif_visitor_id";
  const existingId = localStorage.getItem(visitorKey);
  
  if (!existingId) {
    // New visitor
    const visitorId = `visitor_${Date.now()}_${Math.random()}`;
    localStorage.setItem(visitorKey, visitorId);
    
    const data = getAnalytics();
    data.uniqueVisitors++;
    saveAnalytics(data);
  }
}

export function trackProjectView() {
  const data = getAnalytics();
  data.projectViews++;
  data.lastUpdated = new Date().toISOString();
  saveAnalytics(data);
}

export function trackContactFormSubmission() {
  const data = getAnalytics();
  data.contactFormSubmissions++;
  data.lastUpdated = new Date().toISOString();
  saveAnalytics(data);
}

// For production: Send analytics to your backend
export async function syncAnalyticsToServer(data: AnalyticsData) {
  // TODO: Implement API call to your backend
  // await fetch("/api/analytics", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  console.log("Analytics would be synced to server:", data);
}
