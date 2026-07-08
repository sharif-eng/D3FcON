import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Shield, Cloud, Code, Database, Bot, Sparkles, Rocket, BookOpen, Briefcase, Cpu } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";
import VideoBackground from "@/components/VideoBackground";
import Typewriter from "@/components/Typewriter";

const GITHUB_RAW = "https://raw.githubusercontent.com/sharif-eng/D3FcON/main/sh3rif-portfolio/data";

async function getPlatforms() {
  try {
    const res = await fetch(`${GITHUB_RAW}/platforms.json`, { cache: "no-store" });
    const data = await res.json();
    return data.platforms || [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const platforms = await getPlatforms();

  const focusCards = [
    {
      title: "Build",
      description: "I design and develop practical solutions that solve real-world problems across multiple technology domains.",
      icon: Rocket,
    },
    {
      title: "Test",
      description: "I continuously improve every project through experimentation, cybersecurity research, and hands-on learning.",
      icon: Shield,
    },
    {
      title: "Ship",
      description: "I believe technology creates value only when it reaches users, so every completed project is documented, deployed, and shared.",
      icon: Sparkles,
    },
  ];

  const currentFocusItems = [
    { title: "Building Sharif Labs Website", status: "Active Development", icon: Rocket },
    { title: "SecureLens AI", status: "Planning", icon: Cpu },
    { title: "Cybersecurity Research", status: "Ongoing", icon: Shield },
    { title: "Open Source Contributions", status: "Growing", icon: BookOpen },
  ];

  const services = [
    {
      title: "Cybersecurity",
      description: "Practical security reviews, research, and risk reduction for individuals and modern teams.",
      deliverables: ["Security assessments", "Threat review", "Secure recommendations"],
      href: "/contact",
    },
    {
      title: "Web Development",
      description: "Modern, responsive web experiences built with performance, clarity, and usability in mind.",
      deliverables: ["Landing pages", "Portfolio sites", "Business tools"],
      href: "/contact",
    },
    {
      title: "Cloud Engineering",
      description: "Reliable cloud solutions that support growth, resilience, and efficient operations.",
      deliverables: ["AWS setup", "Infrastructure planning", "Deployment support"],
      href: "/contact",
    },
    {
      title: "Data Analytics",
      description: "Clear, insight-driven dashboards and reporting that help turn data into action.",
      deliverables: ["Dashboards", "Reporting workflows", "Insights"],
      href: "/contact",
    },
    {
      title: "Virtual Assistance",
      description: "Structured support for operations, research, admin workflows, and online productivity.",
      deliverables: ["Research support", "Admin workflow help", "Documentation"],
      href: "/contact",
    },
  ];

  const learningMilestones = [
    "Started Computer Science",
    "Built first full-stack application",
    "Completed cybersecurity training",
    "Red Team internship",
    "Founded Sharif Labs",
    "Current focus",
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <VideoBackground opacity={0.4} />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 animate-fade-in">Sharif Labs</h1>
          <p className="text-base text-gray-400 mb-4 animate-fade-in">Founded by Angole Sharif Abubakar</p>
          <div className="text-xl md:text-2xl text-cyan-400 mb-4 animate-fade-in-delay-1 min-h-[2rem]">
            <Typewriter
              texts={[
                "Cybersecurity Practitioner",
                "AI Application Builder",
                "Full-Stack Developer",
                "Cloud Enthusiast",
                "Data Analyst",
                "Virtual Assistant",
                "Technical Instructor",
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenTexts={2500}
            />
          </div>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
            Sharif Labs is where I build, test, and ship practical technology solutions across cybersecurity, cloud engineering, software development, data analytics, AI-powered automation, and technical education. Every project reflects my commitment to solving real-world problems, continuous learning, and helping individuals, startups, and small-to-medium businesses leverage technology effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <Link href="/projects" className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
              Work With Me
            </Link>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-delay-4">
            <a href="mailto:sharifidris8@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail className="w-6 h-6" /></a>
            <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/angole-sharif-abubakar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {focusCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-slate-800/50 rounded-lg border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all transform hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Track Record</h2>
            <StatsCounter />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Core Competencies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up">
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/Images/Cybersecurity_Service_Image.png" alt="Cybersecurity Services" fill className="object-cover" />
              </div>
              <Shield className="w-12 h-12 text-cyan-400 mb-4 animate-float" />
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Security reviews that reduce risk and protect growth.</li>
                <li>• Research-driven testing and practical hardening.</li>
                <li>• Clear recommendations for safer systems and teams.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/Images/Cloud_Service_Image.png" alt="Cloud Infrastructure" fill className="object-cover" />
              </div>
              <Cloud className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{ animationDelay: "0.5s" }} />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Engineering</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Scalable cloud foundations for modern products.</li>
                <li>• Deployment and architecture support with security in mind.</li>
                <li>• Better reliability, efficiency, and long-term growth.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/Images/Web_Dev_Service_Image.jpg" alt="Web Development" fill className="object-cover" />
              </div>
              <Code className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{ animationDelay: "1s" }} />
              <h3 className="text-xl font-semibold text-white mb-3">Web Development</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Professional digital products that communicate value clearly.</li>
                <li>• Secure, responsive experiences for users and clients.</li>
                <li>• Practical tools that support business goals.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image src="/Images/Data_Analytics_Service_Image.png" alt="Data Analytics" fill className="object-cover" />
              </div>
              <Database className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{ animationDelay: "1.5s" }} />
              <h3 className="text-xl font-semibold text-white mb-3">Data Analytics</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Data storytelling that supports decision-making.</li>
                <li>• Dashboards and reporting for measurable progress.</li>
                <li>• Useful insights for growth, improvement, and planning.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Bot className="w-12 h-12 text-cyan-400 mb-4 animate-float" style={{ animationDelay: "2s" }} />
              <h3 className="text-xl font-semibold text-white mb-3">Virtual Assistance</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Reliable support for admin, research, and execution.</li>
                <li>• Structured workflows that reduce friction and save time.</li>
                <li>• Thoughtful assistance that helps ideas move forward.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12">A growing collection of practical work across security, development, cloud, data, and automation.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                <Shield className="w-20 h-20 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Live</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Security</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Red Team Internship</h3>
                <p className="text-gray-400 text-sm mb-4">Applied offensive security practice with real-world reporting and hands-on execution.</p>
                <p className="text-cyan-300 text-sm mb-4">Impact: strengthened technical depth through structured research and practical testing.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Metasploit</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Nmap</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Burp Suite</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">GitHub</a>
                  <Link href="/projects/red-team-internship" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Details →</Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                <Code className="w-20 h-20 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">Research</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Development</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Internship Management System</h3>
                <p className="text-gray-400 text-sm mb-4">A full-stack platform that supports workflow clarity, accountability, and process visibility.</p>
                <p className="text-cyan-300 text-sm mb-4">Impact: demonstrated how product thinking can improve operational systems.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">GitHub</a>
                  <Link href="/projects/internship-management" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Details →</Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all"></div>
                <Cloud className="w-20 h-20 text-cyan-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">In Progress</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Cloud</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AWS Secure Infrastructure</h3>
                <p className="text-gray-400 text-sm mb-4">A secure cloud foundation designed to support reliable deployment and future scaling.</p>
                <p className="text-cyan-300 text-sm mb-4">Impact: strengthened the path toward dependable modern infrastructure.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">AWS</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">EC2</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">VPC</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/sharif-eng" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">GitHub</a>
                  <Link href="/projects/aws-infrastructure" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">Details →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-all">
              Explore More Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Current Focus</h2>
              <p className="text-gray-400 max-w-2xl">A clear view of the ideas, experiments, and projects currently shaping Sharif Labs.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {currentFocusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-slate-900/50 rounded-lg border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-sm text-cyan-300 mb-2">{item.status}</p>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Professional support and technical delivery across the areas I am actively building and refining.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start"><span className="text-cyan-400 mr-2">•</span>{item}</li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm">Request Service <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Learning Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningMilestones.map((milestone, index) => (
              <div key={milestone} className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 hover:border-cyan-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 text-sm font-semibold">0{index + 1}</span>
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-white font-medium">{milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800/50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research & Practice</h2>
          <p className="text-gray-400 mb-12">Learning through security practice, experimentation, and public problem solving.</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...platforms, ...platforms].map((platform, i) => (
              <a key={`${platform.id}-${i}`} href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-3 group flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500 transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                  <Image src={platform.logo} alt={platform.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build Something</h2>
          <p className="text-gray-400 text-lg mb-8">Sharif Labs is growing through thoughtful projects, useful services, and public progress. If you want to collaborate, hire, or explore a technical idea, I would love to hear from you.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
