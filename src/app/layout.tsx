import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Metehan Sargın | Yazılım Mühendisi",
  description: "Yazılım mühendisi portfolyo sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="bg-white dark:bg-gray-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
