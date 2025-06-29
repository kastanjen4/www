import Section from "@/components/section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om föreningen - BRF Kastanjen 4",
  description:
    "Lär dig mer om BRF Kastanjen 4 som bildades 2005. Huset har 17 lägenheter, gemensamma faciliteter som bastu, tvättstuga och innergård. Perfekt läge mellan Folkets Park och S:t Knuts torg.",
  keywords: [
    "BRF Kastanjen 4",
    "förening",
    "fastighet",
    "faciliteter",
    "bastu",
    "tvättstuga",
    "innergård",
    "Malmö",
  ],
  openGraph: {
    title: "Om föreningen - BRF Kastanjen 4",
    description:
      "Lär dig mer om vår bostadsrättsförening med 17 lägenheter och trevliga faciliteter i centrala Malmö.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function OmKastanjen4() {
  return (
    <Section className="prose dark:prose-invert">
      <h1>Om fastigheten & föreningen</h1>
      <p>Föreningen BRF Kastanjen 4 bildades 2005.</p>
      <p>
        Huset består av 17 lägenheter på en tomt som föreningen har köpt loss.
        15 av dem är 3:or på 87 m2 och två st 2:or på 70 m2.
      </p>
      <p>
        På bottenvåningen finns ett cykelrum som har en utgång mot gatan, en
        tvättstuga som rustats upp med nya maskiner 2023, en bastu några meter
        från hissen/trappan och en välskött innergård med en liten lekplats för
        de små. Det finns även ett &ldquo;party-tak&rdquo; med en av två
        uppsättningar utemöbler. Den andra uppsättningen är under bar himmel så
        att man kan grilla på både regniga och soliga sommardagar!
      </p>
      <p>
        Utöver bostadsrätterna så finns det även diverse utrymmen, förråd och
        rum som går att hyra för en billig peng om man behöver lite extra
        utrymme, vill ha ett rum för en hobby eller en liten verksamhet.{" "}
        <Link href="/lokaler-forrad">Klicka här för att se utbudet!</Link>
      </p>
      <p>
        Fastighetens placering är optimal. Vi är omringade av Malmös mest
        populära och centrala områden.
      </p>
      <p>
        Precis över gatan finns S:t Knuts torg och Folkets park. Ett stenkast
        längre så är man på Möllevångstorget. Åt nästa riktning ligger
        Triangelns köpcentrum och tågstation (där bl.a. tåget till Köpenhamn
        går) också några minuter till fots. Triangeln är också ena änden av
        gågatan som leder mot Gustav Adolfs torg, Storgtorget, Lilla torg och
        Centralstationen. Till Centralstationen är det &ldquo;gångavstånd&rdquo;
        på 20-25 min. Orkar man inte gå så finns utmärkta bussförbindelser
        precis runtom oss.
      </p>
      <p>
        Både Folkets park och Triangeln är knytpunkter för stadsbussarna, och på
        bergsgatan, som korsar Almbacksgatan 50m från vår port, ligger
        busstationer för Lunda-bussarna.
      </p>
    </Section>
  );
}
