import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import {
  ArrowRight,
  Car,
  FileText,
  Mail,
  MapPin,
  Shield,
  Star,
  TreePine,
  Wifi,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BRF Kastanjen 4 - Lugnets oas i stadens puls",
  description:
    "Välkommen till BRF Kastanjen 4 på Almbacksgatan 16, Malmö. En trivsam bostadsrättsförening med 17 lägenheter i centrala Malmö, nära Folkets Park, S:t Knuts torg och Triangeln.",
  keywords: [
    "BRF Kastanjen 4",
    "bostadsrättsförening",
    "Malmö",
    "Almbacksgatan",
    "Folkets Park",
    "Triangeln",
    "bostadsrätt",
  ],
  openGraph: {
    title: "BRF Kastanjen 4 - Lugnets oas i stadens puls",
    description:
      "En trivsam bostadsrättsförening med 17 lägenheter i centrala Malmö, nära Folkets Park och Triangeln.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function Home() {
  const images = [
    {
      src: "/folketspark.jpg",
      alt: "Folkets park",
      icon: TreePine,
      category: "Närområdet",
    },
    {
      src: "/stknutstorg.jpg",
      alt: "S:t Knuts torg",
      icon: MapPin,
      category: "Närområdet",
    },
    {
      src: "/balkongvy.jpg",
      alt: "Balkongvy över gården",
      icon: TreePine,
      category: "Fastigheten",
    },
    {
      src: "/innergarden.jpg",
      alt: "Innergården",
      icon: TreePine,
      category: "Fastigheten",
    },
    {
      src: "/lekplats.jpg",
      alt: "Lekplats på innergården",
      icon: TreePine,
      category: "Fastigheten",
    },
    {
      src: "/partytaket.jpg",
      alt: "Party-taket",
      icon: TreePine,
      category: "Fastigheten",
    },
    {
      src: "/triangeln.jpg",
      alt: "Triangeln köpcentrum",
      icon: MapPin,
      category: "Närområdet",
    },
    {
      src: "/mollevangstorget.jpg",
      alt: "Möllevångstorget",
      icon: MapPin,
      category: "Närområdet",
    },
  ];

  const features = [
    {
      icon: Wifi,
      title: "Bredband 100 Mbit",
      description: "Inkluderat i månadsavgiften",
      highlight: "Ingår",
    },
    {
      icon: Car,
      title: "Parkeringsmöjligheter",
      description: "Extra förråd och MC-parkering",
      highlight: "Tillval",
    },
    {
      icon: Zap,
      title: "Moderna faciliteter",
      description: "Bastu, tvättstuga, cykelrum",
      highlight: "Inkluderat",
    },
    {
      icon: Shield,
      title: "Trygg miljö",
      description: "Lugn gata med god grannsämja",
      highlight: "Säkert",
    },
  ];

  const highlights = [
    "Perfekt läge mellan Folkets Park och S:t Knuts torg",
    "5 minuters promenad till Triangeln station",
    "Nyrenoverade gemensamma utrymmen",
    "Aktiv och engagerad styrelse",
  ];

  return (
    <>
      <Section>
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-primary/10 text-primary">
                  <Star className="mr-2 h-3 w-3" />
                  Välkommen hem
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Lugnets oas i stadens puls
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Vi finns på <strong>Almbacksgatan 16</strong>, ett hus med en
                  liten och mysig BRF som har en trevlig, avslappnad och god
                  grannsämja.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="shadow-lg">
                    <Link
                      href="/info-om-foreningen"
                      className="flex items-center gap-2"
                    >
                      Läs mer om oss
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/maklarinfo">Mäklarinformation</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/kastanjetrad.jpg"
                alt="Kastanjeträd - BRF Kastanjen 4"
                width={600}
                height={400}
                className="relative mx-auto aspect-[3/2] overflow-hidden rounded-2xl object-cover shadow-2xl border"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section (constrained) */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vad vi erbjuder
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Föreningen erbjuder fantastiska gemensamma faciliteter och sätter
            trivsel som prioritet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-primary/20 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="relative mb-4">
                      <div className="rounded-2xl bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        {feature.highlight}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center space-y-3">
                      <h3 className="font-semibold text-lg leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Image Gallery Section (constrained) */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Upptäck området
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Perfekt beläget nära Folkets Park, S:t Knuts torg och med närhet
            till både Möllan och centrum.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => {
            const IconComponent = image.icon;
            return (
              <div
                key={image.alt}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-white" />
                      <span className="text-xs text-white/80 font-medium">
                        {image.category}
                      </span>
                    </div>
                    <p className="text-white text-sm font-semibold leading-tight">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Location Benefits Section (constrained) */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Perfekt läge i Malmö
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Huset ligger perfekt för dig som vill ha nära till allt men ändå
                bo på en lugn gata. Ett stenkast ifrån populära Folkets Park,
                precis över gatan från charmiga S:t Knuts torg och närhet till
                både livliga Möllan samt gågatan i centrum.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dessutom några minuters gång till Triangeln och &ldquo;Station
                Triangeln&rdquo; för pendling till bl.a. Köpenhamn.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <TreePine className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">Folkets Park</div>
                  <div className="text-sm text-muted-foreground">
                    2 min gång
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Triangeln</div>
                  <div className="text-sm text-muted-foreground">
                    5 min gång
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/folketspark.jpg"
                alt="Folkets Park - nära BRF Kastanjen 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="w-full pt-16">
        <GoogleMapsEmbed
          apiKey="AIzaSyA-v4IZcNgTJ20JnwMmwoMH-6wt1xAqMKY"
          height={200}
          width="100%"
          mode="place"
          q="Almbacksgatan 16, Malmö"
        />
      </div>
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Intresserad av att bo hos oss?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Föreningen sätter trivsel i sitt hem som prioritet, både för oss
                som bor här och för dig som funderar på att flytta hit!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="shadow-lg"
              >
                <Link href="/maklarinfo" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Mäklarinformation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 border-white shadow-lg"
              >
                <Link
                  href="mailto:styrelsen@brfkastanjen4.se"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Kontakta styrelsen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
