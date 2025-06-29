import Section from "@/components/section";
import { Crown, Mail, User } from "lucide-react";
import type { Metadata } from "next";

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
  const boardMembers = [
    { name: "Jacob Giraud", role: "Ordföranden", icon: Crown },
    { name: "Alexander Johansson", role: "Ledamot", icon: User },
    { name: "Jesper Ohlsson", role: "Ledamot", icon: User },
    { name: "Kim Kristiansson Stenberg", role: "Ledamot", icon: User },
    { name: "Henrik Lindelöf Bilski", role: "Ledamot", icon: User },
  ];

  const alternates = [
    { name: "Erik Ledfeldt", role: "Suppleant", icon: User },
    { name: "Jonathan Schäder", role: "Suppleant", icon: User },
    { name: "Bob Oskar Kindgren", role: "Suppleant", icon: User },
  ];

  return (
    <Section>
      <div className="prose dark:prose-invert mb-8">
        <h1>Styrelsen</h1>
        <p>
          Vill ni få ett ansikte på oss så är de flesta med i vår facebook-grupp{" "}
          <strong>Kastanjen 4</strong>
          <br />
          Bara att stoppa oss om vi stöter på varandra i trappen!
        </p>
      </div>

      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <Crown className="h-5 w-5 text-primary dark:text-orange-300" />
        Styrelseledamöter
      </h2>

      <div className="grid gap-3 not-prose mb-8">
        {boardMembers.map((member, index) => {
          const IconComponent = member.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30"
            >
              <div className="rounded-full bg-primary/10 dark:bg-primary/20 p-2">
                <IconComponent
                  className={`h-4 w-4 ${
                    member.role === "Ordföranden"
                      ? "text-primary dark:text-orange-300"
                      : "text-primary/80 dark:text-orange-200"
                  }`}
                />
              </div>
              <div>
                <p className="font-medium text-primary dark:text-orange-100">
                  {member.name}
                </p>
                <p className="text-sm text-primary/70 dark:text-orange-200/80">
                  {member.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <User className="h-5 w-5 text-primary dark:text-orange-300" />
        Suppleanter
      </h2>

      <div className="grid gap-3 not-prose mb-8">
        {alternates.map((member, index) => {
          const IconComponent = member.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg bg-primary/5 dark:bg-primary/10 border-primary/20 dark:border-primary/30"
            >
              <div className="rounded-full bg-primary/10 dark:bg-primary/20 p-2">
                <IconComponent className="h-4 w-4 text-primary/80 dark:text-orange-200" />
              </div>
              <div>
                <p className="font-medium text-primary dark:text-orange-100">
                  {member.name}
                </p>
                <p className="text-sm text-primary/70 dark:text-orange-200/80">
                  {member.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-start gap-3 p-4 bg-muted/50 border border-muted rounded-lg not-prose mb-6">
        <Mail className="h-5 w-5 text-primary mt-0.5" />
        <div>
          <p className="font-medium text-sm text-foreground">
            Intresserad av att gå med i styrelsen?
          </p>
          <p className="text-sm text-muted-foreground">
            Hör av dig på mailen så berättar vi mer!
          </p>
        </div>
      </div>

      <div className="text-center not-prose">
        <p className="text-muted-foreground">
          Varma hälsningar
          <br />
          <strong>Styrelsen</strong>
        </p>
      </div>
    </Section>
  );
}
