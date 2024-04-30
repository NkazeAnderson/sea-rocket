import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/navbar/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sea Rocket Tech Enterprise",
  description: "Top rated software development company in Cameroon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[125px] overflow-y-auto h-screen w-screen overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
