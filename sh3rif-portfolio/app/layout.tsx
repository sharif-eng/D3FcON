import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageViewTracker from "@/components/PageViewTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angole Sharif Abubakar - Offensive Security & Cloud Developer",
  description: "Offensive Security Practitioner, Cloud & Web Developer based in Lira City, Uganda. Specializing in penetration testing, AWS cloud infrastructure, web development, and data analytics.",
  keywords: ["offensive security", "ethical hacker", "penetration testing", "cybersecurity Uganda", "AWS cloud developer", "web development Lira", "data analytics"],
  authors: [{ name: "Angole Sharif Abubakar" }],
  icons: {
    icon: '/Images/Logo_Fav.png',
    shortcut: '/Images/Logo_Fav.png',
    apple: '/Images/Logo_Fav.png',
  },
  openGraph: {
    title: "Angole Sharif Abubakar - Offensive Security & Cloud Developer",
    description: "Offensive Security Practitioner helping East African businesses build secure digital infrastructure",
    url: "https://sh3rif.com",
    siteName: "Angole Sharif Abubakar",
    locale: "en_US",
    type: "website",
    images: ['/Images/Logo_Fav.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angole Sharif Abubakar - Offensive Security & Cloud Developer",
    description: "Offensive Security Practitioner | Cloud & Web Developer",
    images: ['/Images/Logo_Fav.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <PageViewTracker />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
