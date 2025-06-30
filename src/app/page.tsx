import { ImageGallery } from "@/components/image-gallery";
import { PageContent } from "@/components/page-content";
import Section from "@/components/section";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Static image imports for blur placeholders
import balkongvy from "/public/balkongvy.jpg";
import bastu from "/public/bastu.jpg";
import folketspark from "/public/folketspark.jpg";
import innergarden from "/public/innergarden.jpg";
import kastanjetrad from "/public/kastanjetrad.jpg";
import lekplats from "/public/lekplats.jpg";
import mollevangstorget from "/public/mollevangstorget.jpg";
import partytaket from "/public/partytaket.jpg";
import stknutstorg from "/public/stknutstorg.jpg";
import triangeln from "/public/triangeln.jpg";

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

const features = [
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
    title: "Välskötta faciliteter",
    description:
      "Bastu, tvättstuga, cykelrum och nyrenoverade gemensamma utrymmen",
    highlight: "Inkluderat",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Trygg miljö",
    description: "Lugn gata med stark grannsämja och säker miljö för familjer",
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

export default function Home() {
  return (
    <PageContent className="pb-0">
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

              <div className="space-y-3">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <Alert key={index} className="border-dashed">
                      <IconComponent className="h-4 w-4" />
                      <AlertDescription className="font-medium">
                        {highlight.text}
                      </AlertDescription>
                    </Alert>
                  );
                })}
              </div>

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
                src={kastanjetrad}
                alt="Kastanjeträd - BRF Kastanjen 4"
                width={600}
                height={400}
                className="relative mx-auto aspect-[3/2] overflow-hidden rounded-2xl object-cover shadow-2xl border"
                priority
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="text-center space-y-4">
          <Badge variant="outline">Vad vi erbjuder</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fantastiska faciliteter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Föreningen erbjuder välskötta gemensamma faciliteter och sätter
            trivsel som högsta prioritet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center space-y-4 p-6">
                <div className="space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {feature.highlight}
                  </Badge>
                  <div className="mx-auto w-fit p-3 bg-primary/10 rounded-xl">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Building Facilities Gallery */}
      <Section>
        <div className="text-center space-y-4">
          <Badge variant="outline">Fastigheten</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Våra faciliteter & gemensamma utrymmen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Välskötta faciliteter och gemensamma områden för alla boende att
            njuta av.
          </p>
        </div>

        <ImageGallery
          items={[
            {
              src: innergarden,
              alt: "Innergården",
              icon: TreePine,
              category: "Fastigheten",
              description: "Gemensam mötesplats för alla boende",
            },
            {
              src: balkongvy,
              alt: "Balkongvy över gården",
              icon: TreePine,
              category: "Fastigheten",
              description: "Lugn och grön innergård",
            },
            {
              src: lekplats,
              alt: "Lekplats på innergården",
              icon: TreePine,
              category: "Fastigheten",
              description: "Säker lekplats för barn",
            },
            {
              src: partytaket,
              alt: "Party-taket",
              icon: TreePine,
              category: "Fastigheten",
              description: "Taketerrass för gemensamma aktiviteter",
            },
            {
              src: bastu,
              alt: "Bastu",
              icon: Zap,
              category: "Fastigheten",
              description: "Stor bastu med plats för upp till 12 personer",
            },
          ]}
        />
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
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{benefit.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {benefit.distance}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  src: folketspark,
                  alt: "Folkets park",
                  icon: TreePine,
                  category: "Närområdet",
                  description: "Malmös gröna hjärta med parker och aktiviteter",
                },
                {
                  src: stknutstorg,
                  alt: "S:t Knuts torg",
                  icon: MapPin,
                  category: "Närområdet",
                  description: "Charmigt torg med caféer och butiker",
                },
                {
                  src: triangeln,
                  alt: "Triangeln köpcentrum",
                  icon: MapPin,
                  category: "Närområdet",
                  description: "Shopping och kollektivtrafik",
                },
                {
                  src: mollevangstorget,
                  alt: "Möllevångstorget",
                  icon: MapPin,
                  category: "Närområdet",
                  description: "Mångkulturellt centrum med restauranger",
                },
              ].map((image) => {
                const IconComponent = image.icon;
                return (
                  <CarouselItem key={image.alt} className="pl-2 md:pl-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Card className="group relative aspect-[4/3] overflow-hidden cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            placeholder="blur"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="space-y-2">
                              <Badge variant="secondary" className="w-fit">
                                <IconComponent className="h-3 w-3 mr-1" />
                                {image.category}
                              </Badge>
                              <p className="text-foreground text-sm font-semibold leading-tight">
                                {image.alt}
                              </p>
                            </div>
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
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Section>

      <div>
        <GoogleMapsEmbed
          apiKey="AIzaSyA-v4IZcNgTJ20JnwMmwoMH-6wt1xAqMKY"
          height={200}
          width="100%"
          mode="place"
          q="Almbacksgatan 16, Malmö"
        />

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <Section className="text-center space-y-8 py-8">
            <div className="space-y-6">
              <Badge variant="outline">Kontakta oss</Badge>
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
          </Section>
        </div>
      </div>
    </PageContent>
  );
}
