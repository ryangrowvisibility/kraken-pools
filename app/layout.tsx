import type { Metadata } from "next";
import { Figtree, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kraken Pools | Inground Pool Design, Installation & Service in Burlington",
  description:
    "Inground pool design and installation, liner replacement, repairs and weekly pool service in Burlington, Oakville, Hamilton and the Golden Horseshoe. Rated 4.6 on Google. Call (905) 802-3755.",
  openGraph: {
    title: "Kraken Pools | Burlington Inground Pool Builders & Service",
    description:
      "Pool design, builds, liners, repairs and weekly service across the Golden Horseshoe. Call (905) 802-3755.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${figtree.variable} ${source.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
