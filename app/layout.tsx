import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const timesNewRoman = localfont({
  src: "./fonts/TimesNewRomanMTStd-Bold.woff2",
  variable: "--font-timesroman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accede a tu Cuenta | Hoteles Xcaret",
  description:
    "Accede a tu cuenta de Hoteles Xcaret de forma rápida y segura. Gestiona tus reservas y disfruta de todos los beneficios de tu cuenta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${timesNewRoman.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
