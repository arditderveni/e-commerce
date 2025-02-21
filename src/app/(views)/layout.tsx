import "../globals.css";
import { AppFooter, AppHeader } from "@/components/global";
import { CartProvider } from "@/lib/providers/cart-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <AppHeader />
      <main className="max-h-viewport overflow-y-auto my-auto overflow-x-hidden">
        {children}

        <AppFooter />
      </main>
    </CartProvider>
  );
}
