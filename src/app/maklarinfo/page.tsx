import { PageContent } from "@/components/page-content";
import Section from "@/components/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mäklarinformation - BRF Kastanjen 4",
  description:
    "Samlad information för mäklare och intressenter om BRF Kastanjen 4. Årsredovisningar, ekonomi, genomfört underhåll, avgifter och stadgar. Föreningen äger tomten, avgift 5535-6698 kr/mån.",
  keywords: [
    "mäklarinfo",
    "årsredovisning",
    "ekonomi",
    "avgift",
    "stadgar",
    "underhåll",
    "BRF Kastanjen 4",
    "bostadsrätt",
  ],
  openGraph: {
    title: "Mäklarinformation - BRF Kastanjen 4",
    description:
      "Komplett information för mäklare: årsredovisningar, ekonomi, avgifter och genomfört underhåll.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function Maklarinfo() {
  const annualReports = [
    {
      title: "Årsredovisning 2024",
      href: "/Brf-Kastanjen-4-Arsredovisning-2024.pdf",
    },
    {
      title: "Årsredovisning 2023",
      href: "/Arsredovisning-2023-inkl-revisionsberattelse-2023.pdf",
    },
    {
      title: "Årsredovisning 2022",
      href: "/Arsredovisning-2022.pdf",
    },
  ];

  return (
    <PageContent>
      <Section className="prose dark:prose-invert">
        <h1>Samlad info till mäklare & intressenter</h1>

        <h2>Årsredovisningar</h2>
        <p>
          Ladda ner våra senaste årsredovisningar för detaljerad information om
          föreningens ekonomi och verksamhet.
        </p>
        <ul>
          {annualReports.map((report, index) => (
            <li key={index}>
              <a href={report.href} rel="noopener noreferrer">
                {report.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Kontakta styrelsen för äldre årsredovisningar.
        </p>

        <h2>Föreningens ekonomi och medlemsavgifter</h2>
        <ul>
          <li>
            Föreningen äger tomten. Friköp av tomträtt från Malmö kommun gjordes
            2021
          </li>
          <li>Avgiften höjdes i maj 2025, inga fler planerade höjningar</li>
          <li>
            Avgiften för 3:orna är mellan 6444 – 6698 kr och för 2:orna 5535 kr
          </li>
          <li>
            I avgiften ingår värme, vatten, förråd, bredband 100 Mbit, TV Bas HD
            och fast telefonabonnemang hos Tele2 via gruppavtal med föreningen.
          </li>
          <li>
            Extra förråd, lokaler och en MC-parkering finns att hyra billigt
          </li>
        </ul>

        <h2>Genomfört underhåll och uppgraderingar</h2>
        <ul>
          <li>
            Underhållsplan för perioden 2016 – 2035 finns att ladda ner som{" "}
            <a href="/underhallsplan-2016-2035.pdf" rel="noopener noreferrer">
              PDF här
            </a>
          </li>
          <li>
            Innergården renoverades 2007, sköts om 1 gång/månad av Sekant
            fastighetsservice
          </li>
          <li>Omisolering av taket 2014</li>
          <li>Hisslinor och brythjul renoverades 2017</li>
          <li>Byte av radiatorventiler och termostater 2017</li>
          <li>Stamspolning 2018</li>
          <li>Byte till LED-lampor i trapphuset 2019</li>
          <li>Byte till fjärrvärmecentral med grönt vatten 2019</li>
          <li>Friköp av tomträtt från Malmö kommun 2021</li>
          <li>OVK med uppgraderat ventilationssystem 2023</li>
          <li>
            Uppgradering av tvättstuga med nya tvättmaskiner och torktumlare
            2023
          </li>
        </ul>

        <h2>Kommande underhåll och renoveringar</h2>
        <ul>
          <li>Inga större renoveringsprojekt de kommande åren</li>
          <li>
            Målning av takplåt uppskjutet på obestämd tid då den bedömdes vara i
            gott skick 2025
          </li>
          <li>Reparering av tegelfasad på innergården</li>
          <li>
            Besiktning, underhåll och upprustning av expansionskärl, röklucka,
            cementmosaikgolv, trappor och lekutrustning kommande år för att
            bibehålla och förbättra fastighetens kvalitativa standard.
          </li>
        </ul>

        <h2>Övrig info om fastigheten och föreningen</h2>
        <ul>
          <li>
            Stadgar finns att ladda ner som{" "}
            <a href="/Stadgar-BRF-Kastanjen-4.pdf" rel="noopener noreferrer">
              PDF här
            </a>
          </li>
          <li>Fastigheten byggdes 1982</li>
          <li>Föreningen bildades 2005</li>
          <li>
            Det finns totalt 17 lägenheter; 16 bostadsrätter och en hyresrätt
          </li>
          <li>
            Av de 17 lägenheterna är 15 st 3:or på 87 m² och två 2:or på 70 m².
          </li>
          <li>
            Gemensamma utrymmen: en mysig innergård, bastu med plats för upp
            till 12 personer, cykelrum, modern tvättstuga med torkrum och
            källsorteringsrum.
          </li>
        </ul>
      </Section>
    </PageContent>
  );
}
