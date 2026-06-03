"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Code, Cloud, ExternalLink, Github } from "lucide-react";
import TechBackground from "@/components/TechBackground";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = projectsData.projects.map(project => ({
    ...project,
    icon: project.category === "security" ? Shield : project.category === "development" ? Code : Cloud,
    color: "cyan" as const
  }));

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const colorClasses = {
    cyan: {
      border: "border-cyan-500/50",
      text: "text-cyan-400",
      bg: "bg-cyan-500/20",
      hover: "hover:border-cyan-500",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 relative">
      <TechBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-400">
            Showcasing practical experience in security, development, and infrastructure
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filter === "all"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("security")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filter === "security"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Security
          </button>
          <button
            onClick={() => setFilter("development")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filter === "development"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <Code className="w-4 h-4 inline mr-2" />
            Development
          </button>
          <button
            onClick={() => setFilter("cloud")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filter === "cloud"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <Cloud className="w-4 h-4 inline mr-2" />
            Cloud
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            
            return (
              <div
                key={project.id}
                className={`bg-slate-800/50 rounded-lg overflow-hidden border ${colors.border} ${colors.hover} transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`h-48 ${colors.bg} flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                  <Icon className={`w-20 h-20 ${colors.text} relative z-10 group-hover:scale-110 transition-transform animate-float`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center ${colors.text} hover:underline text-sm font-semibold`}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center ${colors.text} hover:underline text-sm font-semibold`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className={`flex items-center ${colors.text} hover:underline text-sm font-semibold`}
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Coming Soon */}
        <div className="bg-slate-800/50 rounded-lg p-12 text-center border border-slate-700 animate-fade-in hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
          <h2 className="text-2xl font-bold text-white mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-400 mb-6">
            I'm continuously building new projects and completing CTF challenges. Check back regularly 
            for updates on new security research, development work, and cloud infrastructure projects.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all">
              <Github className="w-5 h-5 mr-2" />
              Follow on GitHub
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all"
            >
              Read Technical Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
