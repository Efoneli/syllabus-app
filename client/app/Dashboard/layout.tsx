import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import GlobalLayout from '../components/GlobalLayout'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syllab",
  description: "...where learning meets excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalLayout>
        {children}
        </GlobalLayout>
        </body>
    </html>
  );
}