import Image from "next/image";
import { Shield, Code, Cloud, Database, Award, Target } from "lucide-react";
import TechBackground from "@/components/TechBackground";

export const metadata = {
  title: "About - SharifLab",
  description: "Learn about SharifLab as a self-taught computer science portfolio focused on cybersecurity, cloud, web development, data analytics, and virtual assistance",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 relative">
      <TechBackground />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About SharifLab
          </h1>
          <p className="text-xl text-gray-400">
            A self-taught computer science journey built through learning, building, and shipping
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-800/50 rounded-lg p-8 mb-12 border border-slate-700 animate-slide-up hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-500 animate-pulse-glow shadow-xl shadow-cyan-500/30">
                <Image
                  src="/Images/Profile-Prof.png"
                  alt="Angole Sharif Abubakar"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Angole Sharif Abubakar
              </h2>
              <p className="text-cyan-400 text-lg mb-4">
                Self-Taught Builder | Cybersecurity, Cloud, Web Dev, Data Analytics, VA
              </p>
              <p className="text-gray-300 mb-2">
                📍 Based in Lira City, Uganda
              </p>
              <p className="text-gray-300 mb-2">
                📧 sharifidris8@gmail.com
              </p>
              <p className="text-gray-300">
                📞 +256 765 721 427
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="w-8 h-8 text-cyan-400 mr-3" />
            The SharifLab Story
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              SharifLab started as a simple idea: create a place where my self-taught computer science journey could become visible, practical, and useful. I have explored and studied <strong className="text-cyan-400">Virtual Assistance</strong>, <strong className="text-white">Data Analytics</strong>, <strong className="text-white">Web Development</strong>, <strong className="text-white">Cybersecurity</strong>, and <strong className="text-white">Cloud</strong> — and now I am turning that learning into projects and services.
            </p>
            <p>
              This portfolio is not meant to pretend I have everything figured out. It is a growing space where I build, learn, and ship work by category. I am not trying to launch a full company overnight; I am building a strong foundation through real projects, useful solutions, and steady improvement.
            </p>
            <p>
              My focus is to create value across the areas I care about most: secure systems, cloud infrastructure, web applications, data-driven insights, and practical support work. As I continue to grow, SharifLab will become a better record of what I can build and what I can offer.
            </p>
            <p className="text-lg font-semibold text-white pt-4">
              The mission is simple: keep learning, keep shipping, and let each project strengthen the next step.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">My Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Security First</h3>
              <p className="text-gray-300">
                Every system I build or assess starts with security in mind. Whether it&apos;s a web application, 
                cloud infrastructure, or data pipeline, I design with threat modeling and defense in depth.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Continuous Learning</h3>
              <p className="text-gray-300">
                Cybersecurity is always evolving. I&apos;m active on CTF platforms (HTB, THM, TCM, picoCTF), 
                constantly learning new exploitation techniques, and working toward industry certifications.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Ethical Foundation</h3>
              <p className="text-gray-300">
                My GRC (Governance, Risk & Compliance) knowledge ensures I understand not just how to hack systems, 
                but the legal, ethical, and business context around security work.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Local Impact</h3>
              <p className="text-gray-300">
                East African businesses deserve world-class security and technology. I&apos;m committed to helping 
                local organizations build resilient, secure digital systems.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Award className="w-8 h-8 text-cyan-400 mr-3" />
            Skills & Expertise
          </h2>
          
          <div className="space-y-8">
            {/* Offensive Security */}
            <div>
              <div className="flex items-center mb-4 animate-slide-left">
                <Shield className="w-6 h-6 text-cyan-400 mr-3 animate-float" />
                <h3 className="text-2xl font-semibold text-white">Offensive Security (Primary Focus)</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Red Team Operations</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Reconnaissance & OSINT</li>
                      <li>• Network Scanning & Enumeration</li>
                      <li>• Exploitation & Privilege Escalation</li>
                      <li>• Post-Exploitation Techniques</li>
                      <li>• Security Reporting & Documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Tools & Frameworks</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Metasploit, Burp Suite, Nmap</li>
                      <li>• Wireshark, John the Ripper</li>
                      <li>• OWASP Top 10 Testing</li>
                      <li>• GRC Frameworks & Compliance</li>
                      <li>• Vulnerability Assessment Tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div>
              <div className="flex items-center mb-4 animate-slide-left">
                <Cloud className="w-6 h-6 text-cyan-400 mr-3 animate-float" style={{animationDelay: '0.5s'}} />
                <h3 className="text-2xl font-semibold text-white">Cloud Infrastructure (AWS)</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">EC2 & VPC</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">S3 & CloudFront</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">IAM & Security Groups</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">RDS & DynamoDB</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Lambda Functions</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">CloudWatch Monitoring</span>
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  Currently pursuing AWS Solutions Architect certification while building secure, scalable infrastructure for clients
                </p>
              </div>
            </div>

            {/* Web Development */}
            <div>
              <div className="flex items-center mb-4 animate-slide-left">
                <Code className="w-6 h-6 text-cyan-400 mr-3 animate-float" style={{animationDelay: '1s'}} />
                <h3 className="text-2xl font-semibold text-white">Web Development</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">React & Next.js</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Node.js & Express</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">TypeScript</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">MongoDB & SQL</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">RESTful APIs</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Tailwind CSS</span>
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  Building secure, production-ready full-stack applications with a security-first mindset
                </p>
              </div>
            </div>

            {/* Data Analytics */}
            <div>
              <div className="flex items-center mb-4 animate-slide-left">
                <Database className="w-6 h-6 text-cyan-400 mr-3 animate-float" style={{animationDelay: '1.5s'}} />
                <h3 className="text-2xl font-semibold text-white">Data Analytics</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Python & Pandas</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Data Visualization</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">SQL Analytics</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Business Intelligence</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Dashboard Creation</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg">Report Automation</span>
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  Helping businesses make data-driven decisions through clear insights and automated reporting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-up">
              <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Science</h3>
              <p className="text-gray-400">Recent Graduate</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Learning</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS Solutions Architect Certification (In Progress)</li>
                <li>• AWS Cloud Practitioner (In Progress)</li>
                <li>• Cisco Networking Courses (Completed)</li>
                <li>• ALX Technology Programs (Completed)</li>
                <li>• Active CTF Participant: TryHackMe, HackTheBox, TCM Security, picoCTF</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Next on the Roadmap</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• OSCP (Offensive Security Certified Professional)</li>
                <li>• CEH (Certified Ethical Hacker)</li>
                <li>• CompTIA Security+</li>
                <li>• AWS Security Specialty</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section>
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-8 text-center animate-pulse-glow">
            <h2 className="text-3xl font-bold text-white mb-4">Current Focus</h2>
            <p className="text-gray-300 text-lg mb-6">
              Building SharifLab one project at a time by combining self-study with practical work in cybersecurity, cloud, web development, data analytics, and virtual assistance.
            </p>
            <p className="text-cyan-400 font-semibold text-xl">
              Goal: Become a recognized cybersecurity professional within the next 6+ months
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
