"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Code, Cloud, ExternalLink, Github, Database, Bot } from "lucide-react";
import TechBackground from "@/components/TechBackground";

const GITHUB_RAW = "https://raw.githubusercontent.com/sharif-eng/D3FcON/main/sh3rif-portfolio/data";

const categoryIcon = (cat: string) => {
  if (cat === "security") return Shield;
  if (cat === "development") return Code;
  if (cat === "cloud") return Cloud;
  if (cat === "data") return Database;
  if (cat === "va") return Bot;
  return Code;
};

const colorClasses = {
  border: "border-cyan-500/50",
  text: "text-cyan-400",
  bg: "bg-cyan-500/20",
  hover: "hover:border-cyan-500",
};

type Project = {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  github?: string | null;
  demo?: string | null;
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${GITHUB_RAW}/projects.json?t=${Date.now()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        setProjects(data.projects || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters = [
    { key: "all", label: "All Projects", icon: null },
    { key: "security", label: "Security", icon: Shield },
    { key: "development", label: "Development", icon: Code },
    { key: "cloud", label: "Cloud", icon: Cloud },
    { key: "data", label: "Data Analytics", icon: Database },
    { key: "va", label: "Virtual Assistance", icon: Bot },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 relative">
      <TechBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-gray-400">
            Real projects shipped across all 5 categories — more being added continuously
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === key ? "bg-cyan-500 text-white" : "bg-slate-800 text-gray-400 hover:bg-slate-700"
              }`}
            >
              {Icon && <Icon className="w-4 h-4 inline mr-2" />}
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-cyan-400 animate-pulse">Loading projects...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filtered.map((project, index) => {
              const Icon = categoryIcon(project.category ?? "");
              return (
                <div
                  key={project.id}
                  className={`bg-slate-800/50 rounded-lg overflow-hidden border ${colorClasses.border} ${colorClasses.hover} transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-48 ${colorClasses.bg} flex items-center justify-center relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                    <Icon className={`w-20 h-20 ${colorClasses.text} relative z-10 group-hover:scale-110 transition-transform animate-float`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.tags ?? []).map((tag: string) => (
                        <span key={tag} className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex items-center ${colorClasses.text} hover:underline text-sm font-semibold`}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`flex items-center ${colorClasses.text} hover:underline text-sm font-semibold`}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      )}
                      <Link href={`/projects/${project.id}`} className={`flex items-center ${colorClasses.text} hover:underline text-sm font-semibold`}>
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="bg-slate-800/50 rounded-lg p-12 text-center border border-slate-700 animate-fade-in hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
          <h2 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h2>
          <p className="text-gray-400 mb-6">
            SharifLab is a work in progress — projects are being built and shipped continuously across all 5 categories. Check back regularly for new additions.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all">
              <Github className="w-5 h-5 mr-2" />
              Follow on GitHub
            </a>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all">
              Read Technical Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
