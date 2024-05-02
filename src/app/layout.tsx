import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/navbar/footer";
import Link from "next/link";
import Image from "next/image";

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
        <main className="pt-[100px] md:pt-[125px] overflow-y-auto h-screen w-screen overflow-x-hidden">
          {children}
          <Footer />
          <div className="fixed bottom-[20px] right-[50px]">
            <Link
              href={
                "https://wa.me/237683403750?text=Can%20I%20have%20information%20on%20building%20a%20website%20with%20you"
              }
            >
              <Image
                className="rounded-full animate-bounce"
                src={"/wa.jpg"}
                width={50}
                height={50}
                alt="Whatsapp Chat"
              />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
