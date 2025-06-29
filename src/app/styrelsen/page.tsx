import Section from "@/components/section";
import { Crown, Mail, User, type LucideIcon } from "lucide-react";
import { siFacebook } from "simple-icons";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface BoardMember {
  name: string;
  role: string;
  icon: LucideIcon;
  initials: string;
}

export const metadata: Metadata = {
  title: "Styrelsen - BRF Kastanjen 4",
  description:
    "Möt styrelsen för BRF Kastanjen 4. Jacob Giraud (ordförande), Alexander Johansson, Jesper Ohlsson, Kim Kristiansson Stenberg, Henrik Lindelöf Bilski och våra suppleanter. Kontakta oss på styrelsen@brfkastanjen4.se",
  keywords: [
    "styrelse",
    "ordförande",
    "ledamöter",
    "suppleanter",
    "kontakt",
    "BRF Kastanjen 4",
  ],
  openGraph: {
    title: "Styrelsen - BRF Kastanjen 4",
    description:
      "Möt styrelsen för BRF Kastanjen 4 och lär dig hur du kan kontakta oss.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function Styrelsen() {
  const facebookGroupUrl = "https://www.facebook.com/groups/1001384617984235";

  const renderBoardMember = (member: BoardMember, index: number) => {
    const IconComponent = member.icon;
    const isChairman = member.role === "Ordförande";
    const isAlternate = member.role === "Suppleant";

    return (
      <Card
        key={index}
        className={`transition-all duration-200 hover:shadow-md ${
          isChairman
            ? "ring-2 ring-primary/20 bg-primary/5"
            : "hover:bg-muted/30"
        }`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <Avatar
              className={`${
                isChairman ? "h-12 w-12 ring-2 ring-primary" : "h-10 w-10"
              }`}
            >
              <AvatarFallback
                className={`text-sm font-semibold ${
                  isChairman
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {member.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <CardTitle
                className={
                  isChairman
                    ? "text-lg leading-tight"
                    : "text-base leading-tight"
                }
              >
                {member.name}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    isChairman
                      ? "default"
                      : isAlternate
                      ? "outline"
                      : "secondary"
                  }
                  className="text-xs w-fit"
                >
                  <IconComponent className="h-3 w-3 mr-1" />
                  {member.role}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    );
  };

  const boardMembers: BoardMember[] = [
    {
      name: "Jacob Giraud",
      role: "Ordförande",
      icon: Crown,
      initials: "JG",
    },
    {
      name: "Alexander Johansson",
      role: "Ledamot",
      icon: User,
      initials: "AJ",
    },
    {
      name: "Jesper Ohlsson",
      role: "Ledamot",
      icon: User,
      initials: "JO",
    },
    {
      name: "Kim Kristiansson Stenberg",
      role: "Ledamot",
      icon: User,
      initials: "KKS",
    },
    {
      name: "Henrik Lindelöf Bilski",
      role: "Ledamot",
      icon: User,
      initials: "HLB",
    },
  ];

  const alternates: BoardMember[] = [
    {
      name: "Erik Ledfeldt",
      role: "Suppleant",
      icon: User,
      initials: "EL",
    },
    {
      name: "Jonathan Schäder",
      role: "Suppleant",
      icon: User,
      initials: "JS",
    },
    {
      name: "Bob Oskar Kindgren",
      role: "Suppleant",
      icon: User,
      initials: "BOK",
    },
  ];

  return (
    <Section className="space-y-8">
      <div className="prose dark:prose-invert">
        <h1>Styrelsen</h1>
        <p>
          Styrelsen består av {boardMembers.length} ledamöter och{" "}
          {alternates.length} suppleanter och har styrelsemöte varje månad.
        </p>
      </div>
      {/* Header Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">
            Vill ni få ett ansikte på oss så är de flesta med i vår
            facebook-grupp{" "}
            <a
              href={facebookGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors underline decoration-2 underline-offset-2"
            >
              Kastanjen 4
            </a>
            <br />
            Bara att stoppa oss om vi stöter på varandra i trappen!
          </p>
        </CardContent>
      </Card>

      {/* Board Members Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Crown className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Styrelseledamöter</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map(renderBoardMember)}
        </div>
      </div>

      {/* Alternates Section */}
      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-3">
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Suppleanter</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {alternates.map(renderBoardMember)}
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-6">
        <Alert>
          <Mail className="h-5 w-5 text-primary" />
          <AlertTitle>Intresserad av att gå med i styrelsen?</AlertTitle>
          <AlertDescription className="text-base">
            <div className="space-y-2">
              <p>Hör av dig på mailen så berättar vi mer!</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button asChild size="sm" className="h-8">
                  <a href="mailto:styrelsen@brfkastanjen4.se">
                    <Mail className="h-3 w-3 mr-2" />
                    styrelsen@brfkastanjen4.se
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="h-8">
                  <a
                    href={facebookGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={siFacebook.path} />
                    </svg>
                    Facebook: Kastanjen 4
                  </a>
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </Section>
  );
}
