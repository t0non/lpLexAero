"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Esconder footer na página de funil (diagnostico)
  if (pathname === "/diagnostico") {
    return null;
  }

  return <Footer />;
}
