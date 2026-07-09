import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { NavProvider } from "@/lib/nav-context";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "APEX Performance | Engineering Excellence",
  description:
    "High-performance automotive components engineered for precision and power. Track-validated parts for Porsche, BMW, Audi, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-body technical-grid">
        <CartProvider>
          <NavProvider>
            <Navbar />
            <main className="pt-16 pb-24">
              {children}
            </main>
            <Footer />
            <MobileNav />
          </NavProvider>
        </CartProvider>
      </body>
    </html>
  );
}
