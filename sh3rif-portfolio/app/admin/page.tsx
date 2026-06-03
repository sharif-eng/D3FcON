"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Shield, Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        sessionStorage.setItem("adminAuth", password);
        router.push("/admin/dashboard");
      } else {
        setError("Invalid password");
        setPassword("");
      }
    } catch (error) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-slate-800/50 rounded-lg p-8 border border-cyan-500/30 animate-scale-in">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-4 p-3">
              <Image 
                src="/Images/Logo_Fav.png" 
                alt="Admin Logo" 
                width={64} 
                height={64}
                className="rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Enter your password to continue</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              {error && (
                <p className="mt-2 text-red-400 text-sm">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-500 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              {loading ? "Logging in..." : "Login to Dashboard"}
            </button>
          </form>

          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <p className="text-cyan-400 text-sm">
              <strong>Secure:</strong> Password is stored in environment variables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
