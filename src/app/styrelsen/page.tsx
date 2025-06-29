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
        <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        Styrelseledamöter
      </h2>

      <div className="grid gap-3 not-prose mb-8">
        {boardMembers.map((member, index) => {
          const IconComponent = member.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
            >
              <div className="rounded-full bg-amber-100 dark:bg-amber-900 p-2">
                <IconComponent
                  className={`h-4 w-4 ${
                    member.role === "Ordföranden"
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-amber-500 dark:text-amber-400"
                  }`}
                />
              </div>
              <div>
                <p className="font-medium text-amber-900 dark:text-amber-100">
                  {member.name}
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  {member.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        Suppleanter
      </h2>

      <div className="grid gap-3 not-prose mb-8">
        {alternates.map((member, index) => {
          const IconComponent = member.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
                <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">
                  {member.name}
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
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
