import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Shield, Cloud, Code, Database } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import VideoBackground from "@/components/VideoBackground";
import Typewriter from "@/components/Typewriter";
import platformsData from "@/data/platforms.json";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Video Background - will show if video file exists, otherwise shows gradient */}
        <VideoBackground opacity={0.4} />
        
        {/* Fallback animated gradient if no video */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Angole Sharif Abubakar
          </h1>
          <div className="text-xl md:text-2xl text-cyan-400 mb-4 animate-fade-in-delay-1 min-h-[2rem]">
            <Typewriter 
              texts={[
                "Offensive Security Practitioner",
                "SOC Analysts",
                "Penetration Tester",
                "AWS Solutions Architect",
                "Web Developer",
                "CS Instructor"
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenTexts={2500}
            />
          </div>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
            Building secure digital infrastructure while pursuing mastery in ethical hacking, penetration testing, and cloud security
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in-delay-4">
            <a href="mailto:sharifidris8@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/angole-sharif-abubakar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          {/* Stats Counter */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Track Record
            </h2>
            <StatsCounter />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Core Competencies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offensive Security */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up">
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/Images/Cybersecurity_Service_Image.png" 
                  alt="Cybersecurity Services"
                  fill
                  className="object-cover"
                />
              </div>
              <Shield className="w-12 h-12 text-cyan-400 mb-4 animate-float" />
              <h3 className="text-xl font-semibold text-white mb-3">Offensive Security</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Penetration Testing</li>
                <li>• Vulnerability Assessment</li>
                <li>• Red Team Operations</li>
                <li>• Security Auditing</li>
                <li>• GRC Consulting</li>
              </ul>
            </div>

            {/* Cloud Development */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/Images/Cloud_Service_Image.png" 
                  alt="Cloud Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <Cloud className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{animationDelay: '0.5s'}} />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• AWS Solutions Architecture</li>
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• Security-First Design</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/Images/Web_Dev_Service_Image.jpg" 
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </div>
              <Code className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{animationDelay: '1s'}} />
              <h3 className="text-xl font-semibold text-white mb-3">Web Development</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Full-Stack Development</li>
                <li>• Secure API Design</li>
                <li>• E-commerce Solutions</li>
                <li>• Business Systems</li>
                <li>• Database Architecture</li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/Images/Data_Analytics_Service_Image.png" 
                  alt="Data Analytics"
                  fill
                  className="object-cover"
                />
              </div>
              <Database className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{animationDelay: '1.5s'}} />
              <h3 className="text-xl font-semibold text-white mb-3">Data Analytics</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Analytics Dashboards</li>
                <li>• Report Automation</li>
                <li>• Insights & Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Showcasing practical experience in security, development, and cloud infrastructure
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                <Shield className="w-20 h-20 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Red Team Internship</h3>
                <p className="text-gray-400 text-sm mb-4">
                  3-month comprehensive engagement covering reconnaissance, exploitation, post-exploitation, and reporting
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Metasploit</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Nmap</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Burp Suite</span>
                </div>
                <Link href="/projects/red-team-internship" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                <Code className="w-20 h-20 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Internship Management System</h3>
                <p className="text-gray-400 text-sm mb-4">
                  University final year project - full-stack web application for managing student internships
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">MongoDB</span>
                </div>
                <Link href="/projects/internship-management" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                <Cloud className="w-20 h-20 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">AWS Secure Infrastructure</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Designed and deployed secure, scalable cloud infrastructure for small business
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">AWS</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">EC2</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">VPC</span>
                </div>
                <Link href="/projects/aws-infrastructure" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTF Activity */}
      <section className="py-20 px-4 bg-slate-800/50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Active CTF Participant
          </h2>
          <p className="text-gray-400 mb-12">
            Continuously sharpening my offensive security skills through Capture The Flag challenges
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...platformsData.platforms, ...platformsData.platforms].map((platform, i) => (
              <a
                key={`${platform.id}-${i}`}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-3 group flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500 transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                  <Image src={platform.logo} alt={platform.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Secure
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Available for cybersecurity consulting, cloud infrastructure, web development, and data analytics projects
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
