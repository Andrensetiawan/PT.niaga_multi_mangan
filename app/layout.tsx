import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import FloatingContactButton from "@/components/FloatingContactButton";
import TabBarBranding from "@/components/TabBarBranding";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PT.Niaga Multi Pangan",
  description:
    "Produsen dan kurator beras Japonica premium Kyohikari dan lini profesional Hikaru untuk kebutuhan retail, hotel, dan industri.",
  icons: {
    icon: "/Logo%20nmp.jpg?v=3",
    shortcut: "/Logo%20nmp.jpg?v=3",
    apple: "/Logo%20nmp.jpg?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} ${playfair.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N1SKZ29BEG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N1SKZ29BEG');
          `}
        </Script>
        <TabBarBranding />
        {children}
        <FloatingContactButton />
      </body>
    </html>
  );
}
