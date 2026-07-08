import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import TechBackground from "@/components/TechBackground";

export const metadata = {
  title: "Blog - SharifLab",
  description: "Technical articles on cybersecurity, CTF writeups, cloud infrastructure, and software development",
};

const GITHUB_RAW = "https://raw.githubusercontent.com/sharif-eng/D3FcON/main/sh3rif-portfolio/data";

async function getBlogPosts() {
  try {
    const res = await fetch(`${GITHUB_RAW}/blog.json`, { cache: "no-store" });
    const data = await res.json();
    return data.posts || [];
  } catch {
    return [];
  }
}

export default async function Blog() {
  const posts = await getBlogPosts();

  const categoryColors = {
    cyan: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      border: "border-cyan-500/50",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 relative">
      <TechBackground />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Blog
          </h1>
          <p className="text-xl text-gray-400">
            Insights on cybersecurity, cloud infrastructure, and software development
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post) => {
            const colors = categoryColors.cyan;
            
            return (
              <article
                key={post.slug}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 animate-fade-in"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 bg-slate-800/50 rounded-lg p-8 text-center border border-slate-700 animate-fade-in hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
          <h2 className="text-2xl font-bold text-white mb-4">
            More Articles Coming Soon
          </h2>
          <p className="text-gray-400">
            I&apos;m regularly publishing CTF writeups, security tutorials, cloud infrastructure guides, 
            and development best practices. Check back for updates!
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/50 hover:scale-105 transition-transform cursor-pointer">
              Security & CTF Writeups
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/50 hover:scale-105 transition-transform cursor-pointer">
              Cloud Infrastructure
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/50 hover:scale-105 transition-transform cursor-pointer">
              Web Development
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/50 hover:scale-105 transition-transform cursor-pointer">
              Data Analytics
            </span>
            <span className="px-4 py-2 bg-slate-700 text-gray-300 rounded-lg border border-slate-600 hover:scale-105 transition-transform cursor-pointer">
              Career & Learning
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
