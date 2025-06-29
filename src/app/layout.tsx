import { MobileNav } from "@/components/ui/mobile-nav";
import { navLinks } from "@/components/ui/nav-links";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { JsonLd } from "@/components/json-ld";
import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import type { Organization, WithContext } from "schema-dts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "BRF Kastanjen 4 - Lugnets oas i stadens puls",
    template: "%s | BRF Kastanjen 4",
  },
  description:
    "Välkommen till lugnets oas i stadens puls! BRF Kastanjen 4 på Almbacksgatan 16, Malmö.",
  keywords: [
    "BRF Kastanjen 4",
    "bostadsrättsförening",
    "Malmö",
    "Almbacksgatan",
    "bostadsrätt",
  ],
  authors: [{ name: "BRF Kastanjen 4" }],
  creator: "BRF Kastanjen 4",
  publisher: "BRF Kastanjen 4",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  metadataBase: new URL("https://brfkastanjen4.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://brfkastanjen4.se",
    siteName: "BRF Kastanjen 4",
    title: "BRF Kastanjen 4 - Lugnets oas i stadens puls",
    description:
      "Välkommen till lugnets oas i stadens puls! BRF Kastanjen 4 på Almbacksgatan 16, Malmö.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRF Kastanjen 4 - Lugnets oas i stadens puls",
    description:
      "Välkommen till lugnets oas i stadens puls! BRF Kastanjen 4 på Almbacksgatan 16, Malmö.",
  },
};

// Revalidate daily to ensure copyright year stays current
export const revalidate = 86400; // 24 hours in seconds

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD structured data
  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BRF Kastanjen 4",
    alternateName: "Bostadsrättsföreningen Kastanjen 4",
    description:
      "Lugnets oas i stadens puls. En trivsam bostadsrättsförening i hjärtat av Malmö.",
    url: "https://brfkastanjen4.se",
    logo: "https://brfkastanjen4.se/logo.png",
    email: "styrelsen@brfkastanjen4.se",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Almbacksgatan 16",
      addressLocality: "Malmö",
      addressRegion: "Skåne",
      postalCode: "211 54",
      addressCountry: "SE",
    },
    areaServed: {
      "@type": "Place",
      name: "Malmö, Sverige",
    },
    foundingDate: "1996",
    identifier: {
      "@type": "PropertyValue",
      name: "Organisationsnummer",
      value: "769612-2675",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "HSB Malmö",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Uthyrning av lokaler och förråd",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Förrådsuthyrning",
            description: "Uthyrning av förråd och lokaler till allmänheten",
          },
        },
      ],
    },
  };

  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <JsonLd schema={organizationSchema} />
      </head>
      <body
        className={`font-sans ${inter.variable} antialiased bg-gradient-to-br from-background via-secondary to-muted min-h-screen w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen w-full">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
              <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Image
                      src={logo}
                      alt="BRF Kastanjen 4 Logo"
                      width={1215}
                      height={205}
                      className="h-6 w-auto"
                      priority
                    />
                  </span>
                </Link>
                <div className="flex items-center gap-6">
                  {/* Desktop Navigation */}
                  <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-6">
                      {navLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <NavigationMenuItem key={link.href}>
                            <Link href={link.href}>
                              <NavigationMenuLink
                                className="px-4 py-2 text-sm font-medium flex items-center gap-2"
                                asChild
                              >
                                <span>
                                  <IconComponent className="h-4 w-4" />
                                  {link.text}
                                </span>
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </NavigationMenu>
                  {/* Mobile Navigation */}
                  <div className="md:hidden">
                    <MobileNav />
                  </div>
                </div>
              </div>
            </header>
            {/* Main content, no max-width or centering here */}
            <main className="flex-1 w-full">{children}</main>
            {/* Enhanced Footer - full width, more padding, improved grid */}
            <footer className="w-full bg-muted/40 border-t py-10 px-4">
              <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 items-start">
                {/* Brand Section */}
                <div className="space-y-4">
                  <span className="font-bold text-lg">BRF Kastanjen 4</span>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Lugnets oas i stadens puls. En trivsam bostadsrättsförening
                    i hjärtat av Malmö.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Org.nr: 7696122675</span>
                    <span>•</span>
                    <span>Malmö, Sverige</span>
                  </div>
                </div>
                {/* Contact Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Kontakt</h3>
                  <div className="space-y-3">
                    <Link
                      href="mailto:styrelsen@brfkastanjen4.se"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      styrelsen@brfkastanjen4.se
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      Almbacksgatan 16, Malmö
                    </div>
                  </div>
                </div>
                {/* Quick Links Section */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Snabblänkar</h3>
                  <div className="grid gap-2">
                    <Link
                      href="/styrelsen"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Kontakta styrelsen
                    </Link>
                    <Link
                      href="/lokaler-forrad"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Boka lokaler
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* Development Mode Toggle - Fixed Position */}
          {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-4 right-4 z-[9999]">
              <ModeToggle />
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
