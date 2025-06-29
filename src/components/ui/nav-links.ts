import { Building2, FileText, Home, Users } from "lucide-react";
import { Route } from "next";

interface NavLink {
  href: Route;
  text: string;
  icon: React.ElementType;
}

export const navLinks: NavLink[] = [
  { href: "/info-om-foreningen", text: "Om Kastanjen 4", icon: Building2 },
  { href: "/maklarinfo", text: "Mäklarinfo", icon: FileText },
  { href: "/styrelsen", text: "Styrelsen", icon: Users },
  { href: "/lokaler-forrad", text: "Lokaler & Förråd", icon: Home },
];
