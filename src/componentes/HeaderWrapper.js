"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Esconder header na página de funil (diagnostico)
  if (pathname === "/diagnostico") {
    return null;
  }

  return <Header />;
}
