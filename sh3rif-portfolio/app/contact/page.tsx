"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { trackContactFormSubmission } from "@/lib/analytics";
import TechBackground from "@/components/TechBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track the contact form submission
    trackContactFormSubmission();
    // Here you would typically send the form data to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 relative">
      <TechBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            Let's discuss your project and how I can help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-left">
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:sharifidris8@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    sharifidris8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+256765721427"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    +256 765 721 427
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Lira City, Uganda</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Serving clients across East Africa and internationally
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-white font-semibold mb-3">Availability</h3>
              <p className="text-gray-400 mb-2">
                Currently accepting new projects
              </p>
              <p className="text-gray-400 text-sm">
                Response time: Within 24 hours
              </p>
            </div>

            <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 animate-pulse-glow">
              <h3 className="text-white font-semibold mb-3">Free Consultation</h3>
              <p className="text-gray-400 text-sm">
                Not sure where to start? I offer a free initial consultation to discuss 
                your project requirements and provide recommendations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 animate-slide-right hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h2>

            {submitted && (
              <div className="mb-6 bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <p className="text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-semibold mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="cybersecurity">Cybersecurity Services</option>
                  <option value="cloud">Cloud Infrastructure (AWS)</option>
                  <option value="web">Web Development</option>
                  <option value="data">Data Analytics</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>

              <p className="text-gray-400 text-sm text-center">
                I'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
