import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import { ReactLenis } from "@/utils/lenis";
import { AppBackgroundGradient } from "@/components/ui/AppBackgroundGradient";
import ThemeProvider from "@/providers/ThemeProvider";
import "./globals.css";

const cabinetGrotesk = localFont({
  src: "./fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet-grotesk",
});

export const metadata: Metadata = {
  title: "HeroUI Chat",
  description: "Design. Describe. Deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cabinetGrotesk.className} antialiased`}>
        <AppBackgroundGradient />
        <ReactLenis root />
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
