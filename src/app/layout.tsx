import { Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

export const metadata = {
  title: "Pixel Bloom - AI Model Development Agency",
  description:
    "Pixel Bloom is your premier AI model agency, delivering cutting-edge solutions tailored to your business needs. Elevate your operations with our innovative AI technology.",
  keywords:
    "AI models, artificial intelligence, machine learning, custom AI solutions, NLP, computer vision, predictive analytics",
  authors: [{ name: "Pixel Bloom" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const outfit = Outfit({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <style>{`
          #nprogress {
            pointer-events: none;
          }
          #nprogress .bar {
            background: #0ea5e9 !important;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
          }
        `}</style>
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
