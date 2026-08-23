import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Supremo Shipyard Marine Engineering | Engineering the Future of Maritime Excellence",
  description:
    "Estaleiro naval internacional especializado em construção, engenharia e reparação de embarcações, com forte atuação nos setores marítimo, offshore e Oil & Gas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-MZ"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-ink font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
