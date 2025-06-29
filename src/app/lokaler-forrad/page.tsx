import Section from "@/components/section";
import { Car, CheckCircle, Home, Mail, Package, XCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Förråd och lokaler att hyra - BRF Kastanjen 4",
  description:
    "Hyra extra förråd, lokaler eller MC-parkering i BRF Kastanjen 4. Från 120 kr/mån för miniförråd till stora lokaler på 34 m². Kontakta Mike på 0707816185 för visning.",
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
      <div className="prose mb-8">
        <h1>Förråd och rum att hyra</h1>
        <p>
          Här är listan över lokalerna som går att hyra ihop med en kort
          beskrivning, tillgängligheten just nu och hyreskostnaden per månad.
        </p>
      </div>

      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 max-w-3xl">
        <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-medium text-sm text-blue-900 mb-1">Kontakt</p>
          <p className="text-sm text-blue-700 mb-0">
            För att få se lokaler eller frågor om lokalerna - skicka ett mail
            till styrelsen på{" "}
            <a
              href="mailto:styrelsen@brfkastanjen4.se"
              className="font-semibold hover:text-blue-800 transition-colors"
            >
              styrelsen@brfkastanjen4.se
            </a>
            !
          </p>
        </div>
      </div>

      <div className="flex items-center align-middle gap-3 mt-12 mb-6">
        <CheckCircle className="h-6 w-6 text-green-600" />
        <h2 className="text-green-700">Tillgängliga</h2>
      </div>

      <div className="grid gap-4 mb-12">
        {availableSpaces.map((space, index) => {
          const IconComponent = space.icon;
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 border border-green-200 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors"
            >
              <div className="rounded-full bg-green-100 p-2 flex-shrink-0">
                <IconComponent className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <h3 className="font-semibold text-green-900 text-lg mb-0">
                    {space.name}
                  </h3>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <div className="bg-green-100 px-2 py-1 rounded text-sm font-medium text-green-700">
                      {space.size}
                    </div>
                    <div className="text-xl font-bold text-green-800">
                      {space.price}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-green-700 leading-relaxed mb-0">
                  {space.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 mt-16 mb-6">
        <XCircle className="h-6 w-6 text-red-600" />
        <h2 className="mb-0 text-red-700">Uthyrda</h2>
      </div>

      <div className="grid gap-4">
        {rentedSpaces.map((space, index) => {
          const IconComponent = space.icon;
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 border border-red-200 bg-red-50/50 rounded-lg opacity-75"
            >
              <div className="rounded-full bg-red-100 p-2 flex-shrink-0">
                <IconComponent className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <h3 className="font-semibold text-red-900 text-lg mb-0">
                    {space.name}
                  </h3>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <div className="bg-red-100 px-2 py-1 rounded text-sm font-medium text-red-700">
                      {space.size}
                    </div>
                    <div className="text-xl font-bold text-red-800">
                      {space.price}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-red-700 leading-relaxed mb-0">
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
