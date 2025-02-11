import type { Metadata } from "next";

import "../globals.css";
import { AppFooter, AppHeader } from "@/components/global";
import { CartProvider } from "@/lib/store/cart-provider";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Online shopping made easy",
  alternates: {
    canonical: "",
    languages: {
      en: "/en-US",
    },
  },
  keywords: [
    "e-commerce",
    "shopping",
    "online shopping",
    "online shop",
    "apparel",
    "shop",
    "clothing",
    "fashion",
    "accessories",
    "shoes",
    "bags",
    "jewelry",
    "sneakers",
    "trainers",
    "boots",
    "heels",
    "flats",
    "sandals",
    "wedges",
    "slippers",
    "slides",
    "jackets",
    "coats",
    "blazers",
    "suits",
    "tops",
    "shirts",
    "blouses",
    "t-shirts",
    "jacket",
    "coat",
    "blazer",
    "suit",
    "top",
    "shirt",
    "blouse",
    "t-shirt",
    "sweaters",
    "sweater",
    "cardigans",
    "cardigan",
    "hoodies",
    "hoodie",
    "sweatshirts",
    "sweatshirt",
    "pants",
    "jeans",
    "shorts",
    "skirts",
    "skirt",
    "dresses",
    "dress",
    "jumpsuits",
    "jumpsuit",
    "rompers",
    "romper",
    "swimsuits",
    "swimsuit",
  ],
  openGraph: {
    siteName: "E-Commerce",
    title: "E-Commerce",
    description: "Online shopping made easy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <AppHeader />
      <main className="max-h-viewport overflow-y-auto">
        {children}

        <AppFooter />
      </main>
    </CartProvider>
  );
}
