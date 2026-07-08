import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageViewTracker from "@/components/PageViewTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sh3rif.com"),
  title: "SharifLab - Angole Sharif Abubakar",
  description: "SharifLab — a builder's portfolio by Angole Sharif Abubakar. Shipping projects in Cybersecurity, Cloud, Web Development, Data Analytics, and Virtual Assistance.",
  keywords: ["SharifLab", "offensive security", "ethical hacker", "penetration testing", "cybersecurity Uganda", "AWS cloud developer", "web development", "data analytics", "virtual assistance"],
  authors: [{ name: "Angole Sharif Abubakar" }],
  icons: {
    icon: '/Images/Logo_Fav.png',
    shortcut: '/Images/Logo_Fav.png',
    apple: '/Images/Logo_Fav.png',
  },
  openGraph: {
    title: "SharifLab - Angole Sharif Abubakar",
    description: "SharifLab — shipping projects in Cybersecurity, Cloud, Web Dev, Data Analytics & Virtual Assistance",
    url: "https://sh3rif.com",
    siteName: "SharifLab",
    locale: "en_US",
    type: "website",
    images: ['/Images/Logo_Fav.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "SharifLab - Angole Sharif Abubakar",
    description: "SharifLab | Cybersecurity · Cloud · Web Dev · Data Analytics · Virtual Assistance",
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
