"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  FolderKanban, 
  FileText, 
  BarChart3, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Save,
  X
} from "lucide-react";
import projectsData from "@/data/projects.json";
import blogData from "@/data/blog.json";
import statsData from "@/data/stats.json";
import platformsData from "@/data/platforms.json";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"projects" | "blog" | "stats" | "platforms">("projects");
  const [projects, setProjects] = useState(projectsData.projects);
  const [blogPosts, setBlogPosts] = useState(blogData.posts);
  const [stats, setStats] = useState(statsData.stats);
  const [platforms, setPlatforms] = useState(platformsData.platforms);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    const isAuth = sessionStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin");
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    router.push("/admin");
  };

  const saveContent = async () => {
    setSaving(true);
    setSaveMessage("");

    try {
      let type = "";
      let data: any = [];

      if (activeTab === "projects") {
        type = "projects";
        data = projects;
      } else if (activeTab === "blog") {
        type = "blog";
        data = blogPosts;
      } else if (activeTab === "platforms") {
        type = "platforms";
        data = platforms;
      } else {
        type = "stats";
        data = stats;
      }

      const adminPassword = sessionStorage.getItem("adminAuth");

      const response = await fetch("/api/save-content", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-admin-auth": adminPassword || ""
        },
        body: JSON.stringify({ type, data }),
      });

      if (response.ok) {
        setSaveMessage("✅ Saved successfully! Refreshing...");
        setTimeout(() => window.location.reload(), 1000);
      } else {
        const errorData = await response.json().catch(() => null);
        setSaveMessage(
          `❌ Failed to save.${errorData?.error ? ` ${errorData.error}` : " Please try again."}`
        );
      }
    } catch (error) {
      setSaveMessage("❌ Error saving content.");
    } finally {
      setSaving(false);
    }
  };

  const openAddForm = () => {
    setEditingIndex(null);
    setUploadedImage(null);
    if (activeTab === "projects") {
      setFormData({ id: "", title: "", category: "security", description: "", tags: [], github: "", demo: null, image: null });
    } else if (activeTab === "blog") {
      setFormData({ slug: "", title: "", excerpt: "", date: "", readTime: "", category: "", image: null });
    } else if (activeTab === "platforms") {
      setFormData({ id: "", name: "", logo: "", url: "" });
    }
    setShowForm(true);
  };

  const openEditForm = (item: any, index: number) => {
    setEditingIndex(index);
    setFormData({ ...item });
    setUploadedImage(item.image || null);
    setShowForm(true);
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);
    uploadFormData.append("type", activeTab);

    const adminPassword = sessionStorage.getItem("adminAuth");

    try {
      const response = await fetch("/api/upload-image", {
        method: "POST",
        headers: {
          "x-admin-auth": adminPassword || ""
        },
        body: uploadFormData,
      });

      if (response.ok) {
        const data = await response.json();
        const imagePath = data.path || data.imageUrl;
        setUploadedImage(imagePath);
        setFormData((prev: any) => ({
          ...prev,
          ...(activeTab === "platforms" ? { logo: imagePath } : { image: imagePath })
        }));
      }
    } catch (error) {
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = () => {
    if (activeTab === "projects") {
      const newProjects = [...projects];
      if (editingIndex !== null) {
        newProjects[editingIndex] = formData;
      } else {
        newProjects.push(formData);
      }
      setProjects(newProjects);
    } else if (activeTab === "blog") {
      const newPosts = [...blogPosts];
      if (editingIndex !== null) {
        newPosts[editingIndex] = formData;
      } else {
        newPosts.push(formData);
      }
      setBlogPosts(newPosts);
    } else if (activeTab === "platforms") {
      const newPlatforms = [...platforms];
      if (editingIndex !== null) {
        newPlatforms[editingIndex] = formData;
      } else {
        newPlatforms.push(formData);
      }
      setPlatforms(newPlatforms);
    }
    setShowForm(false);
    setFormData({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-900/95 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full p-2">
              <Image 
                src="/Images/Logo_Fav.png" 
                alt="Admin Logo" 
                width={40} 
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">Manage your portfolio content</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {saveMessage && (
          <div className={`mb-6 p-4 rounded-lg border ${
            saveMessage.includes("✅") 
              ? "bg-green-500/20 border-green-500/50 text-green-400" 
              : "bg-red-500/20 border-red-500/50 text-red-400"
          }`}>
            {saveMessage}
          </div>
        )}

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "projects" ? "bg-cyan-500 text-white" : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <FolderKanban className="w-5 h-5" />
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("blog")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "blog" ? "bg-cyan-500 text-white" : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <FileText className="w-5 h-5" />
            Blog Posts ({blogPosts.length})
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "stats" ? "bg-cyan-500 text-white" : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Statistics ({stats.length})
          </button>
          <button
            onClick={() => setActiveTab("platforms")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "platforms" ? "bg-cyan-500 text-white" : "bg-slate-800 text-gray-400 hover:bg-slate-700"
            }`}
          >
            <Shield className="w-5 h-5" />
            Platforms ({platforms.length})
          </button>
        </div>

        {activeTab === "projects" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
              <div className="flex gap-3">
                <button
                  onClick={openAddForm}
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all font-semibold"
                >
                  <Plus className="w-5 h-5" />
                  Add Project
                </button>
                <button
                  onClick={saveContent}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white rounded-lg transition-all font-semibold"
                >
                  <Save className="w-5 h-5" />
                  {saving ? "Saving..." : "Save & Publish"}
                </button>
              </div>
            </div>

            {showForm && (
              <div className="bg-slate-800/90 rounded-lg p-6 border border-cyan-500/30 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {editingIndex !== null ? "Edit Project" : "Add New Project"}
                  </h3>
                  <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Project ID</label>
                    <input
                      type="text"
                      value={formData.id || ""}
                      onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="my-project-id"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="My Awesome Project"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Category</label>
                    <select
                      value={formData.category || "security"}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                    >
                      <option value="security">Security</option>
                      <option value="development">Development</option>
                      <option value="cloud">Cloud</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Description</label>
                    <textarea
                      value={formData.description || ""}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      rows={3}
                      placeholder="Brief project description"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={formData.tags?.join(", ") || ""}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",").map((t: string) => t.trim()) })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">GitHub URL</label>
                    <input
                      type="text"
                      value={formData.github || ""}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Demo URL (optional)</label>
                    <input
                      type="text"
                      value={formData.demo || ""}
                      onChange={(e) => setFormData({ ...formData, demo: e.target.value || null })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="https://demo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Project Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                    />
                    {uploading && <p className="text-cyan-400 text-sm mt-2">Uploading...</p>}
                    {uploadedImage && (
                      <div className="mt-3">
                        <Image src={uploadedImage} alt="Preview" width={200} height={120} className="rounded-lg border border-cyan-500/30" />
                        <p className="text-gray-400 text-xs mt-1">{uploadedImage}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold"
                  >
                    {editingIndex !== null ? "Update Project" : "Add Project"}
                  </button>
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {projects.map((project, index) => (
                <div key={project.id} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">{tag}</span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Category:</span> {project.category}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditForm(project, index)}
                        className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete this project?")) {
                            setProjects(projects.filter((_, i) => i !== index));
                          }
                        }}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Blog Posts</h2>
              <div className="flex gap-3">
                <button
                  onClick={openAddForm}
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all font-semibold"
                >
                  <Plus className="w-5 h-5" />
                  Add Post
                </button>
                <button
                  onClick={saveContent}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white rounded-lg transition-all font-semibold"
                >
                  <Save className="w-5 h-5" />
                  {saving ? "Saving..." : "Save & Publish"}
                </button>
              </div>
            </div>

            {showForm && (
              <div className="bg-slate-800/90 rounded-lg p-6 border border-cyan-500/30 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {editingIndex !== null ? "Edit Blog Post" : "Add New Blog Post"}
                  </h3>
                  <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Slug (URL)</label>
                    <input
                      type="text"
                      value={formData.slug || ""}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="my-blog-post"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title || ""}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="My Blog Post Title"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Excerpt</label>
                    <textarea
                      value={formData.excerpt || ""}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      rows={3}
                      placeholder="Brief summary..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Date (YYYY-MM-DD)</label>
                      <input
                        type="text"
                        value={formData.date || ""}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                        placeholder="2026-06-15"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Read Time</label>
                      <input
                        type="text"
                        value={formData.readTime || ""}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                        placeholder="5 min read"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Category</label>
                    <input
                      type="text"
                      value={formData.category || ""}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="Security"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Blog Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                    />
                    {uploading && <p className="text-cyan-400 text-sm mt-2">Uploading...</p>}
                    {uploadedImage && (
                      <div className="mt-3">
                        <Image src={uploadedImage} alt="Preview" width={200} height={120} className="rounded-lg border border-cyan-500/30" />
                        <p className="text-gray-400 text-xs mt-1">{uploadedImage}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold"
                  >
                    {editingIndex !== null ? "Update Post" : "Add Post"}
                  </button>
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {blogPosts.map((post, index) => (
                <div key={post.slug} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
                      <div className="flex gap-4 text-sm text-gray-400">
                        <span>📅 {post.date}</span>
                        <span>⏱️ {post.readTime}</span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">{post.category}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditForm(post, index)}
                        className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete this post?")) {
                            setBlogPosts(blogPosts.filter((_, i) => i !== index));
                          }
                        }}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Statistics</h2>
              <button
                onClick={saveContent}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white rounded-lg transition-all font-semibold"
              >
                <Save className="w-5 h-5" />
                {saving ? "Saving..." : "Save & Publish"}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{stat.icon}</div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...stats];
                        newStats[index].value = parseInt(e.target.value) || 0;
                        setStats(newStats);
                      }}
                      className="w-20 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-center focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "platforms" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Learning Platforms</h2>
              <div className="flex gap-3">
                <button
                  onClick={openAddForm}
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all font-semibold"
                >
                  <Plus className="w-5 h-5" />
                  Add Platform
                </button>
                <button
                  onClick={saveContent}
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white rounded-lg transition-all font-semibold"
                >
                  <Save className="w-5 h-5" />
                  {saving ? "Saving..." : "Save & Publish"}
                </button>
              </div>
            </div>

            {showForm && (
              <div className="bg-slate-800/90 rounded-lg p-6 border border-cyan-500/30 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {editingIndex !== null ? "Edit Platform" : "Add New Platform"}
                  </h3>
                  <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Platform ID</label>
                    <input
                      type="text"
                      value={formData.id || ""}
                      onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="tryhackme"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Platform Name</label>
                    <input
                      type="text"
                      value={formData.name || ""}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="TryHackMe"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Profile URL</label>
                    <input
                      type="text"
                      value={formData.url || ""}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                      placeholder="https://tryhackme.com/p/yourusername"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Platform Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                      className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-cyan-500"
                    />
                    {uploading && <p className="text-cyan-400 text-sm mt-2">Uploading...</p>}
                    {(uploadedImage || formData.logo) && (
                      <div className="mt-3 flex items-center gap-3">
                        <Image
                          src={uploadedImage || formData.logo}
                          alt="Logo preview"
                          width={64}
                          height={64}
                          className="rounded-full border border-cyan-500/30 object-cover"
                        />
                        <p className="text-gray-400 text-xs">{uploadedImage || formData.logo}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold"
                  >
                    {editingIndex !== null ? "Update Platform" : "Add Platform"}
                  </button>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div key={platform.id} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={platform.logo}
                        alt={platform.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover border border-slate-600"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
                        <p className="text-gray-400 text-xs truncate max-w-[200px]">{platform.url}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditForm(platform, index)}
                        className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete this platform?")) {
                            setPlatforms(platforms.filter((_, i) => i !== index));
                          }
                        }}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
