import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioData from '@/data/portfolioData.json';


export const metadata: Metadata = {
  title: `${portfolioData.profile.name} | ${portfolioData.profile.title}`,
  description: portfolioData.profile.bio.substring(0, 160),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`} suppressHydrationWarning>
      <body
        className="antialiased font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
      >
        <Providers>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-blue-50/5 to-gray-50 dark:from-gray-900 dark:via-blue-900/5 dark:to-gray-900 -z-10 transition-colors duration-300" />
            <Navbar />
            <main>{children}</main>
            <Footer profile={portfolioData.profile} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
