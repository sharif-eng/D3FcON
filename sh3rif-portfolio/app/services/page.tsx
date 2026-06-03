import { Shield, Cloud, Code, Database, CheckCircle, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechBackground from "@/components/TechBackground";

export const metadata = {
  title: "Services - Angole Sharif Abubakar",
  description: "Cybersecurity consulting, cloud infrastructure, web development, and data analytics services for East African businesses",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 relative">
      <TechBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building secure, scalable digital infrastructure for East African businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {/* Cybersecurity Services */}
          <section className="bg-slate-800/50 rounded-lg p-8 border border-cyan-500/30 animate-slide-up hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
            <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden animate-float">
                <Image 
                  src="/Images/Cybersecurity_Service_Image.png" 
                  alt="Cybersecurity Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Shield className="w-10 h-10 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Cybersecurity Services</h2>
                </div>
                <p className="text-cyan-400">Protect your digital assets with offensive security expertise</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Vulnerability Assessment</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive scanning and analysis to identify security weaknesses in your systems, 
                  networks, and applications before attackers do.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Network vulnerability scanning
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Web application security testing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Detailed vulnerability reports with remediation steps
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Penetration Testing</h3>
                <p className="text-gray-300 mb-4">
                  Real-world attack simulations to test your defenses. I think like an attacker 
                  to help you strengthen your security posture.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Web application penetration testing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Network penetration testing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Exploitation and post-exploitation analysis
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Security Auditing</h3>
                <p className="text-gray-300 mb-4">
                  Review your security configurations, policies, and practices to ensure 
                  they meet industry standards and best practices.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Security policy review
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Infrastructure security assessment
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Compliance gap analysis
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">GRC Consulting</h3>
                <p className="text-gray-300 mb-4">
                  Governance, Risk, and Compliance guidance to help you meet regulatory 
                  requirements and maintain security standards.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Risk assessment and management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Compliance framework implementation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Security policy development
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-cyan-300 text-sm">
                <strong>Note:</strong> Building expertise through hands-on Red Team experience and continuous CTF practice. 
                Ideal for SMEs looking for practical, affordable security assessments.
              </p>
            </div>
          </section>

          {/* Cloud Infrastructure */}
          <section className="bg-slate-800/50 rounded-lg p-8 border border-cyan-500/30 animate-slide-up hover:shadow-2xl hover:shadow-cyan-500/20 transition-all" style={{animationDelay: '0.1s'}}>
            <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden animate-float" style={{animationDelay: '0.5s'}}>
                <Image 
                  src="/Images/Cloud_Service_Image.png" 
                  alt="Cloud Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Cloud className="w-10 h-10 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Cloud Infrastructure (AWS)</h2>
                </div>
                <p className="text-cyan-400">Secure, scalable cloud solutions for modern businesses</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">AWS Architecture Design</h3>
                <p className="text-gray-300 mb-4">
                  Design and implement secure, cost-effective AWS infrastructure tailored to your business needs.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    EC2, VPC, and networking setup
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    S3 storage and CDN configuration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    RDS database setup and optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
                <p className="text-gray-300 mb-4">
                  Move your applications and data to AWS with minimal downtime and maximum security.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Migration strategy and planning
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Data transfer and synchronization
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Post-migration optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Security-First Cloud Setup</h3>
                <p className="text-gray-300 mb-4">
                  Every cloud deployment starts with security. Proper IAM, security groups, encryption, and monitoring.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    IAM roles and access management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Security group configuration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    CloudWatch monitoring and alerts
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Get the most value from AWS by right-sizing resources and implementing cost-saving strategies.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Resource usage analysis
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Reserved instance recommendations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Auto-scaling implementation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Web Development */}
          <section className="bg-slate-800/50 rounded-lg p-8 border border-cyan-500/30 animate-slide-up hover:shadow-2xl hover:shadow-cyan-500/20 transition-all" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden animate-float" style={{animationDelay: '1s'}}>
                <Image 
                  src="/Images/Web_Dev_Service_Image.jpg" 
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Code className="w-10 h-10 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Web Development</h2>
                </div>
                <p className="text-cyan-400">Production-ready applications built with security in mind</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Web Applications</h3>
                <p className="text-gray-300 mb-4">
                  Custom web applications tailored to your business needs, from simple websites to complex systems.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    React & Next.js frontend
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Node.js backend development
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Database design and optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">E-commerce Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Online stores with payment integration, inventory management, and secure checkout processes.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Product catalog management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Payment gateway integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Order management system
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Business Management Systems</h3>
                <p className="text-gray-300 mb-4">
                  Internal tools to streamline operations, track data, and improve business efficiency.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    CRM and inventory systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Employee management portals
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Reporting and analytics dashboards
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Secure API Development</h3>
                <p className="text-gray-300 mb-4">
                  RESTful APIs built with authentication, authorization, and security best practices.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    JWT authentication
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Rate limiting and validation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    API documentation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Analytics */}
          <section className="bg-slate-800/50 rounded-lg p-8 border border-cyan-500/30 animate-slide-up hover:shadow-2xl hover:shadow-cyan-500/20 transition-all" style={{animationDelay: '0.3s'}}>
            <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden animate-float" style={{animationDelay: '1.5s'}}>
                <Image 
                  src="/Images/Data_Analytics_Service_Image.png" 
                  alt="Data Analytics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Database className="w-10 h-10 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Data Analytics</h2>
                </div>
                <p className="text-cyan-400">Turn your data into actionable business insights</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Business Intelligence</h3>
                <p className="text-gray-300 mb-4">
                  Transform raw data into meaningful insights that drive strategic business decisions.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Data analysis and interpretation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    KPI tracking and monitoring
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Trend analysis and forecasting
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Data Visualization</h3>
                <p className="text-gray-300 mb-4">
                  Interactive dashboards and visual reports that make complex data easy to understand.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Interactive dashboards
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Charts, graphs, and visual reports
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Real-time data monitoring
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Report Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate repetitive reporting tasks to save time and ensure consistent insights.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Scheduled report generation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Email and notification integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Custom report templates
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-3">Database Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Query and analyze your databases to extract valuable business metrics and insights.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    SQL query optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Data cleaning and preparation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    Performance metrics tracking
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Pricing & CTA */}
        <section className="mt-16 bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-2">
            All services are project-based with transparent pricing tailored to your needs.
          </p>
          <p className="text-gray-400 mb-6 text-sm">
            Free initial consultation to discuss your requirements and provide a detailed quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Request a Quote
          </Link>
        </section>
      </div>
    </div>
  );
}
