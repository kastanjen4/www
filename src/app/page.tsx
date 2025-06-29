import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import {
  ArrowRight,
  Car,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Shield,
  Star,
  TreePine,
  Users,
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
      description: "Malmös gröna hjärta med parker och aktiviteter",
    },
    {
      src: "/stknutstorg.jpg",
      alt: "S:t Knuts torg",
      icon: MapPin,
      category: "Närområdet",
      description: "Charmigt torg med caféer och butiker",
    },
    {
      src: "/balkongvy.jpg",
      alt: "Balkongvy över gården",
      icon: TreePine,
      category: "Fastigheten",
      description: "Lugn och grön innergård",
    },
    {
      src: "/innergarden.jpg",
      alt: "Innergården",
      icon: TreePine,
      category: "Fastigheten",
      description: "Gemensam mötesplats för alla boende",
    },
    {
      src: "/lekplats.jpg",
      alt: "Lekplats på innergården",
      icon: TreePine,
      category: "Fastigheten",
      description: "Säker lekplats för barn",
    },
    {
      src: "/partytaket.jpg",
      alt: "Party-taket",
      icon: TreePine,
      category: "Fastigheten",
      description: "Taketerrass för gemensamma aktiviteter",
    },
    {
      src: "/triangeln.jpg",
      alt: "Triangeln köpcentrum",
      icon: MapPin,
      category: "Närområdet",
      description: "Shopping och kollektivtrafik",
    },
    {
      src: "/mollevangstorget.jpg",
      alt: "Möllevångstorget",
      icon: MapPin,
      category: "Närområdet",
      description: "Mångkulturellt centrum med restauranger",
    },
  ];

  const features = [
    {
      icon: Wifi,
      title: "Bredband 100 Mbit",
      description:
        "Höghastighetsfiberbredband inkluderat i månadsavgiften för alla lägenheter",
      highlight: "Ingår",
      color: "bg-blue-500",
    },
    {
      icon: Car,
      title: "Parkeringsmöjligheter",
      description:
        "Extra förråd, MC-parkering och olika lokalstorlekar tillgängliga",
      highlight: "Tillval",
      color: "bg-green-500",
    },
    {
      icon: Zap,
      title: "Moderna faciliteter",
      description:
        "Bastu, tvättstuga, cykelrum och nyrenoverade gemensamma utrymmen",
      highlight: "Inkluderat",
      color: "bg-purple-500",
    },
    {
      icon: Shield,
      title: "Trygg miljö",
      description:
        "Lugn gata med stark grannsämja och säker miljö för familjer",
      highlight: "Säkert",
      color: "bg-amber-500",
    },
  ];

  const highlights = [
    {
      text: "Perfekt läge mellan Folkets Park och S:t Knuts torg",
      icon: MapPin,
    },
    {
      text: "5-10 minuters promenad till Triangeln station",
      icon: Clock,
    },
    {
      text: "Bastu, tvättstuga, cykelrum och innegård med lekplats",
      icon: CheckCircle,
    },
    {
      text: "Aktiv och engagerad styrelse",
      icon: Users,
    },
  ];

  const locationBenefits = [
    {
      name: "Folkets Park",
      distance: "2 min gång",
      icon: TreePine,
      color: "text-green-600",
      description: "Malmös populäraste park med evenemang året runt",
    },
    {
      name: "S:t Knuts torg",
      distance: "1 min gång",
      icon: MapPin,
      color: "text-blue-600",
      description: "Mysigt torg med caféer och lokala butiker",
    },
    {
      name: "Triangeln",
      distance: "5-10 min gång",
      icon: MapPin,
      color: "text-purple-600",
      description:
        "Köpcentrum och tågstation med direktförbindelse till Köpenhamn",
    },
    {
      name: "Möllevångstorget",
      distance: "8 min gång",
      icon: MapPin,
      color: "text-orange-600",
      description: "Livlig mångkulturell knutpunkt med restauranger",
    },
  ];

  return (
    <>
      <Section>
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit text-sm py-2 px-4">
                  <Star className="mr-2 h-4 w-4" />
                  Välkommen hem
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  Lugnets oas i stadens puls
                </h1>

                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Vi finns på <strong>Almbacksgatan 16</strong>, ett hus med en
                  liten och mysig BRF som har en trevlig, avslappnad och god
                  grannsämja.
                </p>
              </div>

              <Card className="border-dashed border-primary/30">
                <CardContent>
                  <div className="grid gap-3">
                    {highlights.map((highlight, index) => {
                      const IconComponent = highlight.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-sm group hover:text-primary transition-colors"
                        >
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-medium">{highlight.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
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

      {/* Features Section */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            Vad vi erbjuder
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fantastiska faciliteter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Föreningen erbjuder moderna gemensamma faciliteter och sätter
            trivsel som högsta prioritet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105"
              >
                <CardHeader className="text-center space-y-4">
                  <div className="relative mx-auto w-fit">
                    <div
                      className={`rounded-2xl p-4 ${feature.color}/10 group-hover:${feature.color}/20 transition-colors`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${feature.color.replace(
                          "bg-",
                          "text-"
                        )}`}
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 text-xs font-semibold"
                    >
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Image Gallery Section */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="mb-4">
            Upptäck området
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Perfekt läge i Malmö
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nära Folkets Park, S:t Knuts torg och med närhet till både Möllan
            och centrum.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => {
            const IconComponent = image.icon;
            return (
              <HoverCard key={image.src}>
                <HoverCardTrigger asChild>
                  <Card className="group relative aspect-square overflow-hidden cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge variant="secondary" className="w-fit mb-2">
                        <IconComponent className="h-3 w-3 mr-1" />
                        {image.category}
                      </Badge>
                      <p className="text-foreground text-sm font-semibold leading-tight">
                        {image.alt}
                      </p>
                    </div>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{image.alt}</h4>
                      <p className="text-sm text-muted-foreground">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </Section>

      {/* Location Benefits Section */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">Perfekt läge</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Mitt i Malmös hjärta
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

            <Separator />

            <div className="grid gap-4">
              {locationBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="flex items-center gap-4">
                      <div className={`rounded-lg bg-primary/10 p-3`}>
                        <IconComponent className={`h-5 w-5 ${benefit.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{benefit.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {benefit.distance}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/folketspark.jpg"
                  alt="Folkets Park - nära BRF Kastanjen 4"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
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

      <Section>
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="mb-4">
              Kontakta oss
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Välkommen att bo hos oss
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Föreningen sätter trivsel i sitt hem som prioritet, både för oss
              som bor här och för dig som funderar på att flytta hit!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/maklarinfo" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Mäklarinformation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg">
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
      </Section>
    </>
  );
}
