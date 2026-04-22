import { PageContent } from "@/components/page-content";
import Section from "@/components/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mäklarinformation - BRF Kastanjen 4",
  description:
    "Samlad information för mäklare och intressenter om BRF Kastanjen 4. Årsredovisningar, ekonomi, genomfört underhåll, avgifter och stadgar. Föreningen äger tomten, avgift 6572-7795 kr/mån.",
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
      title: "Årsredovisning 2025",
      href: "/Arsredovisning-2025-inkl-revisionsberattelse.pdf",
    },
    {
      title: "Årsredovisning 2024",
      href: "/Brf-Kastanjen-4-Arsredovisning-2024.pdf",
    },
    {
      title: "Årsredovisning 2023",
      href: "/Arsredovisning-2023-inkl-revisionsberattelse-2023.pdf",
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

        <h2>Avgifter</h2>
        <ul>
          <li>
            3:or (87 m²): 7 617 – 7 795 kr/mån | 2:or (70 m²): 6 572 kr/mån
          </li>
          <li>
            I avgiften ingår värme, vatten, förråd, bredband 100 Mbit, TV Bas
            HD och fast telefonabonnemang hos Tele2 via gruppavtal med
            föreningen.
          </li>
          <li>
            Extra förråd, lokaler och en MC-parkering finns att hyra billigt.
          </li>
        </ul>

        <h2>Ekonomi</h2>
        <ul>
          <li>
            Föreningen äger tomten (friköp från Malmö kommun 2021).
          </li>
          <li>
            Avgiftsjustering genomfördes i maj 2025 samt inför 2026 för att
            stärka ekonomin inför kommande underhåll och investeringar.
          </li>
          <li>
            Styrelsen arbetar aktivt med en långsiktig ekonomisk plan baserad
            på den uppdaterade underhållsplanen, för att säkerställa
            föreningens ekonomiska stabilitet och bevara fastighetens
            långsiktiga värde.
          </li>
        </ul>

        <h2>Genomfört underhåll och uppgraderingar</h2>
        <p>
          Underhållsplan för perioden 2025–2075 finns att ladda ner som{" "}
          <a href="/2025-underhallsplan-50-ar.pdf">PDF här</a>.
        </p>
        <ul>
          <li>
            Byte av röklucka – gammal krutladdningsmodell ersatt med ny enligt
            modern standard – Q1 2026
          </li>
          <li>Reparation av tegelfasad på innergården – Q4 2025</li>
          <li>Spolning av stammar – Q4 2025</li>
          <li>Underhåll och förebyggande brandskyddsåtgärd bastu – Q4 2025</li>
          <li>Kontroll av skyddsrum och skyddsrumsmateriel – Q2 2025</li>
          <li>Genomgång av fastighetens brandskydd och rutiner – Q2 2025</li>
          <li>
            Uppgradering av tvättstuga med nya tvättmaskiner och torktumlare –
            2023
          </li>
          <li>OVK med uppgraderat ventilationssystem – 2023</li>
          <li>Friköp av tomträtt från Malmö kommun – 2021</li>
          <li>Byte till fjärrvärmecentral med grönt vatten – 2019</li>
          <li>Byte till LED-lampor i trapphuset – 2019</li>
          <li>Stamspolning – 2018</li>
          <li>Byte av radiatorventiler och termostater – 2017</li>
          <li>Hisslinor och brythjul renoverade – 2017</li>
          <li>Omisolering av taket – 2014</li>
          <li>
            Innergården renoverad – 2007 (sköts om 1 gång/månad av Sekant
            fastighetsservice)
          </li>
        </ul>

        <h2>Kommande underhåll och renoveringar</h2>
        <ul>
          <li>Inga större renoveringsprojekt de kommande åren</li>
          <li>Obligatorisk ventilationskontroll (OVK) planerad under 2026</li>
          <li>
            Målning av takplåt uppskjutet på obestämd tid då den bedömdes vara
            i gott skick 2025
          </li>
          <li>
            Besiktning, underhåll och upprustning av expansionskärl,
            cementmosaikgolv, trappor och lekutrustning kommande år för att
            bibehålla och förbättra fastighetens kvalitativa standard.
          </li>
        </ul>

        <h2>Om fastigheten och föreningen</h2>
        <ul>
          <li>Fastigheten byggdes 1982, föreningen bildades 2005</li>
          <li>
            17 lägenheter: 15 st 3:or (87 m²) och 2 st 2:or (70 m²) – varav
            16 bostadsrätter och en hyresrätt
          </li>
          <li>
            Gemensamma utrymmen: innergård, bastu (plats för 12 pers),
            cykelrum, tvättstuga med torkrum och källsorteringsrum
          </li>
          <li>
            Stadgar finns att ladda ner som{" "}
            <a href="/2025Stadgar-BRF-Kastanjen4.pdf" rel="noopener noreferrer">
              PDF här
            </a>
          </li>
        </ul>
      </Section>
    </PageContent>
  );
}
