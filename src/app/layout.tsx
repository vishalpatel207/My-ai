import { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel Bloom - AI Model Development Agency",
  description: "Pixel Bloom is your premier AI model agency, delivering cutting-edge solutions tailored to your business needs. Elevate your operations with our innovative AI technology.",
  keywords: "AI models, artificial intelligence, machine learning, custom AI solutions, NLP, computer vision, predictive analytics",
  authors: [{ name: "Pixel Bloom" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
