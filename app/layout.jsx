import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ALBUM, ARTIST } from "@/lib/data";

// Elegant high-contrast serif (Canela / Editorial New substitute) for headlines,
// clean grotesque (Neue Haas / Suisse substitute) for signage and body.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://reubenitis.github.io/ElCroco/"),
  title: `${ARTIST.name} — ${ALBUM.title}`,
  description:
    "EL CROCO — a Miami luxury art brand that happens to release music. ORO PURO, out now.",
  keywords: [
    "El Croco",
    "Croco Mia",
    "Oro Puro",
    "Miami",
    "luxury art",
    "Latin music",
    "Art Basel",
  ],
  openGraph: {
    title: `${ARTIST.name} — ${ALBUM.title}`,
    description:
      "A Miami luxury art brand that happens to release music. ORO PURO, out now.",
    images: ["/img/album/oro-puro.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTIST.name} — ${ALBUM.title}`,
    description: "A Miami luxury art brand that happens to release music.",
    images: ["/img/album/oro-puro.jpg"],
  },
};

export const viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
