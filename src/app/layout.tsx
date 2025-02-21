import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ReactQueryProvider,
  CartProvider,
  ThemeProvider,
} from "@/lib/providers";
import { Toaster } from "sonner";
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };

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
          <ReactQueryProvider>
            <CartProvider>
              {/* <AppHeader /> */}
              <main className="max-h-viewport">{children}</main>
              <div id="modal-root" />
            </CartProvider>

            <Toaster />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
