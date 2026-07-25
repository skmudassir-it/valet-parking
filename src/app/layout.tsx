import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Prestige Valet & Parking Services | Premium Valet Parking",
    template: "%s | Prestige Valet & Parking Services",
  },
  description: "Premium valet parking and parking management services for events, restaurants, hotels, weddings, and corporate properties. Five-star service, every arrival.",
  keywords: ["valet parking", "event parking", "wedding valet", "restaurant valet", "hotel parking", "parking management", "corporate valet"],
  openGraph: {
    title: "Prestige Valet & Parking Services",
    description: "Premium valet parking services. Five-star service, every arrival.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
