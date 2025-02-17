import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global";
import { CartProvider } from "@/lib/store/cart-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          <CartProvider>
            {/* <AppHeader /> */}
            <main className="max-h-viewport">{children}</main>
            <div id="modal-root" />
          </CartProvider>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
