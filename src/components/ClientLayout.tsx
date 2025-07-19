"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// @ts-expect-error: No types for nprogress package
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    NProgress.done();
  }, [pathname]);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 