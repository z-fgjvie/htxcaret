import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import InicioHeader from "@/components/InicioHeader";
import Footer from "@/components/Footer";

const timesNewRoman = localfont({
  src: "./fonts/TimesNewRomanMTStd-Bold.woff2",
  variable: "--font-timesroman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accede a tu Cuenta | Hoteles Xcaret",
  description:
    "Accede a tu cuenta de Hoteles Xcaret de forma rápida y segura. Gestiona tus reservas y disfruta de todos los beneficios de tu cuenta.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
  },

  openGraph: {
    title: "Accede a tu Cuenta | Hoteles Xcaret",
    description:
      "Accede a tu cuenta de Hoteles Xcaret de forma rápida y segura. Gestiona tus reservas y disfruta de todos los beneficios de tu cuenta.",
    url: "https://htxcaret.vercel.app",
    siteName: "Hoteles Xcaret",
    images: [
      {
        url: "https://htxcaret.vercel.app/og-gpxcalogo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${timesNewRoman.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <InicioHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
