import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";

const electrolize = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: ["400"], // Matches your .electrolize-regular rule
});

export const metadata: Metadata = {
  title: "AsjathAhamed",
  description: "Portfolio of Asjath Ahamed, Penetration Tester & Network Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${electrolize.variable} antialiased font-electrolize`}>
        {children}
      </body>
    </html>
  );
}