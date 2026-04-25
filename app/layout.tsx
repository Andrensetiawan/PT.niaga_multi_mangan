import type { Metadata } from "next";
import { Bebas_Neue, Lato, Plus_Jakarta_Sans, Playfair_Display, Saira_Stencil_One } from "next/font/google";
import localFont from "next/font/local";
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

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  variable: "--font-saira-stencil",
  weight: "400",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const floatFont = localFont({
  src: "../public/font/float.ttf",
  variable: "--font-float",
  display: "swap",
});

const nylonBrushFont = localFont({
  src: "../public/font/Nylon Brush.otf",
  variable: "--font-nylon-brush",
  display: "swap",
});

const enableAnalytics = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  title: "PT.Niaga Multi Pangan",
  description:
    "Producer and curator of premium Kyohikari Japonica rice and the professional Hikaru line for retail, hotel, and industrial needs.",
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} ${playfair.variable} ${sairaStencil.variable} ${bebasNeue.variable} ${lato.variable} ${floatFont.variable} ${nylonBrushFont.variable} antialiased`}>
        {/* Google Analytics */}
        {enableAnalytics ? (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-N1SKZ29BEG"
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-N1SKZ29BEG');
              `}
            </Script>
          </>
        ) : null}
        <TabBarBranding />
        {children}
        <FloatingContactButton />
      </body>
    </html>
  );
}
