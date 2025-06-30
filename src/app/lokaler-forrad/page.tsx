import { PageContent } from "@/components/page-content";
import Section from "@/components/section";
import { JsonLd } from "@/components/json-ld";
import { Car, Home, Mail, Package } from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata: Metadata = {
  title: "Förråd och lokaler att hyra - BRF Kastanjen 4",
  description:
    "Hyra extra förråd och lokaler från 120 kr/mån. MC-parkering, källarlokaler och förråd i olika storlekar. Kontakta styrelsen för visning och mer information.",
  keywords: [
    "förråd",
    "lokaler",
    "hyra",
    "MC-parkering",
    "förvaring",
    "BRF Kastanjen 4",
    "extra utrymme",
    "hyra förråd malmö",
    "hyra lokal malmö",
    "förrådshyra",
    "extautrymme malmö",
  ],
  openGraph: {
    title: "Förråd och lokaler att hyra - BRF Kastanjen 4",
    description:
      "Hyra extra förråd och lokaler från 120 kr/mån. MC-parkering, källarlokaler och förråd i olika storlekar.",
    type: "website",
    locale: "sv_SE",
    url: "https://brfkastanjen4.se/lokaler-forrad",
  },
  alternates: {
    canonical: "https://brfkastanjen4.se/lokaler-forrad",
  },
};

export default function LokalerForrad() {
  const spaces = [
    {
      name: "Miniförrådet på vinden",
      size: "2 m²",
      price: "120 kr/mån",
      priceValue: 120,
      description: "Litet förråd på vinden.",
      icon: Package,
      available: true,
      category: "StorageUnit",
      categoryName: "Förråd",
    },
    {
      name: "MC-Parkering",
      size: "4 m²",
      price: "325 kr/mån",
      priceValue: 325,
      description: "Egen parkering för motorcykel.",
      icon: Car,
      available: true,
      category: "ParkingSpace",
      categoryName: "Parkering",
    },
    {
      name: "Lilla förrådet i källaren",
      size: "4 m²",
      price: "400 kr/mån",
      priceValue: 400,
      description: "Litet källarförråd med tillgång till el.",
      icon: Package,
      available: true,
      category: "StorageUnit",
      categoryName: "Förråd",
    },
    {
      name: "Förrådet på 7:e",
      size: "6 m²",
      price: "440 kr/mån",
      priceValue: 440,
      description: "Förråd högst upp med tillgång till el.",
      icon: Package,
      available: true,
      category: "StorageUnit",
      categoryName: "Förråd",
    },
    {
      name: "Lokalen med vatten",
      size: "12 m²",
      price: "1100 kr/mån",
      priceValue: 1100,
      description:
        "En lokal på entréplan bredvid tvättstugan med egen dusch & en toalett som behöver fixas (diskuteras vid visat intresse). El och ventilation finns också.",
      icon: Home,
      available: true,
      category: "CommercialSpace",
      categoryName: "Lokaler",
    },
    {
      name: "Stora källarlokalen",
      size: "34 m²",
      price: "2800 kr/mån",
      priceValue: 2800,
      description:
        "Den största lokalen med både el och ventilation plus ett mini-rum inuti själva lokalen.",
      icon: Home,
      available: true,
      category: "CommercialSpace",
      categoryName: "Lokaler",
    },
    {
      name: "Förrådet med fönstret",
      size: "7 m²",
      price: "440 kr/mån",
      priceValue: 440,
      description:
        "Förråd på bottenvåningen med ingång från cykelrummet. Fönster mot innergården så dagsljuset lyser in, däremot saknas el-uttag.",
      icon: Package,
      available: false,
      category: "StorageUnit",
      categoryName: "Förråd",
    },
    {
      name: "Mellanstora lokalen",
      size: "13 m²",
      price: "620 kr/mån",
      priceValue: 620,
      description: "Källarlokal med el.",
      icon: Home,
      available: false,
      category: "CommercialSpace",
      categoryName: "Lokaler",
    },
  ];

  // Sort spaces: available first, then rented
  const sortedSpaces = [...spaces].sort((a, b) => {
    if (a.available && !b.available) return -1;
    if (!a.available && b.available) return 1;
    return 0;
  });

  return (
    <PageContent>
      <Section>
        <article className="space-y-8">
          <header className="prose dark:prose-invert">
            <h1>Förråd och rum att hyra</h1>
            <p>
              Här är listan över lokalerna som går att hyra ihop med en kort
              beskrivning, tillgängligheten just nu och hyreskostnaden per
              månad.
            </p>
          </header>

          <Alert>
            <Mail className="h-4 w-4" />
            <AlertTitle>Kontakt</AlertTitle>
            <AlertDescription>
              <p>
                För att få se lokaler eller frågor om lokalerna - skicka ett
                mail till styrelsen på{" "}
                <a
                  href="mailto:styrelsen@brfkastanjen4.se"
                  className="font-semibold hover:text-primary transition-colors underline"
                >
                  styrelsen@brfkastanjen4.se
                </a>
                !
              </p>
            </AlertDescription>
          </Alert>

          <div className="grid gap-2">
            {sortedSpaces.map((space) => {
              const IconComponent = space.icon;
              const isAvailable = space.available;
              return (
                <div
                  key={space.name}
                  className={`p-3 rounded border transition-colors ${
                    isAvailable
                      ? "border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20"
                      : "opacity-60 border-gray-200 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-800/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    {/* Name & Icon */}
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <IconComponent
                        className={`h-4 w-4 flex-shrink-0 ${
                          isAvailable
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      />
                      <h3
                        className={`font-medium text-sm truncate ${
                          isAvailable
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {space.name}
                      </h3>
                    </div>

                    {/* Badges and Price */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Badge
                        variant={isAvailable ? "default" : "secondary"}
                        className={`text-xs ${
                          isAvailable
                            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {isAvailable ? "Ledig" : "Uthyrd"}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          isAvailable
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        }`}
                      >
                        {space.categoryName}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          isAvailable
                            ? "border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
                            : "border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-400"
                        }`}
                      >
                        {space.size}
                      </Badge>
                      <span
                        className={`font-semibold text-xs ${
                          isAvailable
                            ? "text-emerald-700 dark:text-emerald-300"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {space.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs mt-1.5 ${
                      isAvailable
                        ? "text-gray-600 dark:text-gray-400"
                        : "text-gray-500 dark:text-gray-500"
                    }`}
                  >
                    {space.description}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        {spaces
          .filter((space) => space.category !== "ParkingSpace")
          .map((space, index) => (
            <JsonLd
              key={index}
              schema={{
                "@context": "https://schema.org",
                "@type": "SelfStorage",
                name: space.name,
                description: space.description,
                priceRange: space.price,
              }}
            />
          ))}
        {spaces
          .filter((space) => space.category === "ParkingSpace")
          .map((space, index) => (
            <JsonLd
              key={index}
              schema={{
                "@context": "https://schema.org",
                "@type": "ParkingFacility",
                name: space.name,
                description: space.description,
              }}
            />
          ))}
      </Section>
    </PageContent>
  );
}
