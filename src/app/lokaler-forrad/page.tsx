import { PageContent } from "@/components/page-content";
import Section from "@/components/section";
import { JsonLd } from "@/components/json-ld";
import { Car, CheckCircle, Home, Mail, Package, XCircle } from "lucide-react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      size: "2 m2",
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
      size: "4 m2",
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
      size: "4 m2",
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
      size: "6 m2",
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
      size: "12 m2",
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
      size: "34 m2",
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
      size: "7 m2",
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
      size: "13 m2",
      price: "620 kr/mån",
      priceValue: 620,
      description: "Källarlokal med el.",
      icon: Home,
      available: false,
      category: "CommercialSpace",
      categoryName: "Lokaler",
    },
  ];

  // Split the array based on availability
  const availableSpaces = spaces.filter((space) => space.available);
  const rentedSpaces = spaces.filter((space) => !space.available);

  // Group spaces by category
  const groupSpacesByCategory = (spaceList: typeof spaces) => {
    const grouped = spaceList.reduce((acc, space) => {
      if (!acc[space.categoryName]) {
        acc[space.categoryName] = [];
      }
      acc[space.categoryName].push(space);
      return acc;
    }, {} as Record<string, typeof spaces>);
    return grouped;
  };

  const renderSpaceCard = (space: (typeof spaces)[0], isAvailable: boolean) => {
    const IconComponent = space.icon;
    const colorClasses = isAvailable
      ? {
          border: "border-emerald-200 dark:border-emerald-800",
          bg: "bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-50 dark:hover:bg-emerald-950/30",
          avatar: "bg-emerald-100 dark:bg-emerald-900",
          icon: "text-emerald-600 dark:text-emerald-400",
          title: "text-emerald-900 dark:text-emerald-100",
          badge:
            "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800",
          price: "text-emerald-800 dark:text-emerald-200",
          description: "text-emerald-700 dark:text-emerald-300",
          availability: "https://schema.org/InStock",
        }
      : {
          border: "border-gray-200 dark:border-gray-700",
          bg: "bg-gray-50/50 dark:bg-gray-800/20 opacity-75",
          avatar: "bg-gray-100 dark:bg-gray-800",
          icon: "text-gray-600 dark:text-gray-400",
          title: "text-gray-700 dark:text-gray-300",
          badge:
            "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
          price: "text-gray-600 dark:text-gray-400",
          description: "text-gray-600 dark:text-gray-400",
          availability: "https://schema.org/OutOfStock",
        };

    return (
      <Card
        key={space.name}
        className={`${colorClasses.border} ${colorClasses.bg} transition-colors`}
        itemScope
        itemType="https://schema.org/Product"
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Avatar className={`${colorClasses.avatar} h-10 w-10`}>
              <AvatarFallback className={`${colorClasses.avatar} border-0`}>
                <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <h3
                  className={`font-semibold ${colorClasses.title} text-lg`}
                  itemProp="name"
                >
                  {space.name}
                </h3>
                <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                  <Badge
                    variant="secondary"
                    className={colorClasses.badge}
                    itemProp="size"
                  >
                    {space.size}
                  </Badge>
                  <div
                    className={`text-xl font-bold ${colorClasses.price}`}
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <span
                      itemProp="price"
                      content={space.priceValue.toString()}
                    >
                      {space.price}
                    </span>
                    <meta itemProp="priceCurrency" content="SEK" />
                    <meta
                      itemProp="availability"
                      content={colorClasses.availability}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p
            className={`text-sm ${colorClasses.description} leading-relaxed`}
            itemProp="description"
          >
            {space.description}
          </p>
        </CardContent>
      </Card>
    );
  };

  const renderAccordionForSpaces = (
    groupedSpaces: Record<string, typeof spaces>,
    isAvailable: boolean
  ) => {
    return (
      <Accordion
        type="multiple"
        defaultValue={Object.keys(groupedSpaces)}
        className="w-full"
      >
        {Object.entries(groupedSpaces).map(([categoryName, categorySpaces]) => (
          <AccordionItem key={categoryName} value={categoryName}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <span>{categoryName}</span>
                <Badge variant="outline">{categorySpaces.length}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pt-2">
                {categorySpaces.map((space) =>
                  renderSpaceCard(space, isAvailable)
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

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

          <Tabs defaultValue="available" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="available"
                className="flex items-center gap-2"
              >
                <CheckCircle className="h-4 w-4" />
                Tillgängliga ({availableSpaces.length})
              </TabsTrigger>
              <TabsTrigger value="rented" className="flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                Uthyrda ({rentedSpaces.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="available">
              {renderAccordionForSpaces(
                groupSpacesByCategory(availableSpaces),
                true
              )}
            </TabsContent>

            <TabsContent value="rented">
              {renderAccordionForSpaces(
                groupSpacesByCategory(rentedSpaces),
                false
              )}
            </TabsContent>
          </Tabs>
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
