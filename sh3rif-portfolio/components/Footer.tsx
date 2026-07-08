import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/Images/Logo_Fav.png" 
                alt="SharifLab Logo" 
                width={40} 
                height={40}
                className="rounded-md"
              />
              <h3 className="text-xl font-bold text-white">
                SharifLab<span className="text-cyan-400">.dev</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              A builder&apos;s portfolio — shipping projects in Cybersecurity, Cloud, Web Dev, Data Analytics &amp; Virtual Assistance
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Penetration Testing</li>
              <li className="text-gray-400 text-sm">Cloud Infrastructure</li>
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Data Analytics</li>
              <li className="text-gray-400 text-sm">Virtual Assistance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="mailto:sharifidris8@gmail.com" className="hover:text-cyan-400 transition-colors">
                  sharifidris8@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href="tel:+256765721427" className="hover:text-cyan-400 transition-colors">
                  +256 765 721 427
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                Lira City, Uganda
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SharifLab — Angole Sharif Abubakar. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="mailto:sharifidris8@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sharif-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/angole-sharif-abubakar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
