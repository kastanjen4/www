import Section from "@/components/section";
import { Car, CheckCircle, Home, Mail, Package, XCircle } from "lucide-react";
import type { Metadata } from "next";

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
  ],
  openGraph: {
    title: "Förråd och lokaler att hyra - BRF Kastanjen 4",
    description:
      "Hyra extra förråd och lokaler från 120 kr/mån. Kontakta Mike på 0707816185 för visning.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function LokalerForrad() {
  const spaces = [
    {
      name: "Miniförrådet på vinden",
      size: "2 m2",
      price: "120 kr/mån",
      description: "Litet förråd på vinden.",
      icon: Package,
      available: true,
    },
    {
      name: "MC-Parkering",
      size: "4 m2",
      price: "325 kr/mån",
      description: "Egen parkering för motorcykel.",
      icon: Car,
      available: true,
    },
    {
      name: "Lilla förrådet i källaren",
      size: "4 m2",
      price: "400 kr/mån",
      description: "Litet källarförråd med tillgång till el.",
      icon: Package,
      available: true,
    },
    {
      name: "Förrådet på 7:e",
      size: "6 m2",
      price: "440 kr/mån",
      description: "Förråd högst upp med tillgång till el.",
      icon: Package,
      available: true,
    },
    {
      name: "Lokalen med vatten",
      size: "12 m2",
      price: "1100 kr/mån",
      description:
        "En lokal på entréplan bredvid tvättstugan med egen dusch & en toalett som behöver fixas (diskuteras vid visat intresse). El och ventilation finns också.",
      icon: Home,
      available: true,
    },
    {
      name: "Stora källarlokalen",
      size: "34 m2",
      price: "2800 kr/mån",
      description:
        "Den största lokalen med både el och ventilation plus ett mini-rum inuti själva lokalen.",
      icon: Home,
      available: true,
    },
    {
      name: "Förrådet med fönstret",
      size: "7 m2",
      price: "440 kr/mån",
      description:
        "Förråd på bottenvåningen med ingång från cykelrummet. Fönster mot innergården så dagsljuset lyser in, däremot saknas el-uttag.",
      icon: Package,
      available: false,
    },
    {
      name: "Mellanstora lokalen",
      size: "13 m2",
      price: "620 kr/mån",
      description: "Källarlokal med el.",
      icon: Home,
      available: false,
    },
  ];

  // Split the array based on availability
  const availableSpaces = spaces.filter((space) => space.available);
  const rentedSpaces = spaces.filter((space) => !space.available);

  return (
    <Section>
      <div className="prose dark:prose-invert mb-8">
        <h1>Förråd och rum att hyra</h1>
        <p>
          Här är listan över lokalerna som går att hyra ihop med en kort
          beskrivning, tillgängligheten just nu och hyreskostnaden per månad.
        </p>
      </div>

      <div className="flex items-start gap-3 p-4 bg-muted/50 border border-muted rounded-lg mb-6 max-w-3xl">
        <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium text-sm text-foreground mb-1">Kontakt</p>
          <p className="text-sm text-muted-foreground mb-0">
            För att få se lokaler eller frågor om lokalerna - skicka ett mail
            till styrelsen på{" "}
            <a
              href="mailto:styrelsen@brfkastanjen4.se"
              className="font-semibold hover:text-primary transition-colors"
            >
              styrelsen@brfkastanjen4.se
            </a>
            !
          </p>
        </div>
      </div>

      <div className="flex items-center align-middle gap-3 mt-12 mb-6">
        <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-emerald-700 dark:text-emerald-300">Tillgängliga</h2>
      </div>

      <div className="grid gap-4 mb-12">
        {availableSpaces.map((space, index) => {
          const IconComponent = space.icon;
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
            >
              <div className="rounded-full bg-emerald-100 dark:bg-emerald-900 p-2 flex-shrink-0">
                <IconComponent className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 text-lg mb-0">
                    {space.name}
                  </h3>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <div className="bg-emerald-100 dark:bg-emerald-900 px-2 py-1 rounded text-sm font-medium text-emerald-700 dark:text-emerald-300">
                      {space.size}
                    </div>
                    <div className="text-xl font-bold text-emerald-800 dark:text-emerald-200">
                      {space.price}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed mb-0">
                  {space.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 mt-16 mb-6">
        <XCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        <h2 className="mb-0 text-gray-700 dark:text-gray-300">Uthyrda</h2>
      </div>

      <div className="grid gap-4">
        {rentedSpaces.map((space, index) => {
          const IconComponent = space.icon;
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20 rounded-lg opacity-75"
            >
              <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2 flex-shrink-0">
                <IconComponent className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-lg mb-0">
                    {space.name}
                  </h3>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-medium text-gray-600 dark:text-gray-400">
                      {space.size}
                    </div>
                    <div className="text-xl font-bold text-gray-600 dark:text-gray-400">
                      {space.price}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-0">
                  {space.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
