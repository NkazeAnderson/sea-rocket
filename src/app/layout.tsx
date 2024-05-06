import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/navbar/footer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sea Rocket Tech Enterprise",
  description:
    "Sea Rocket Tech Enterprise is a top rated web development company in Cameroon offering advanced web development solutions for mobile, web and cloud",
  keywords:
    "Sea Rocket Tech Enterprise, build a website in cameroon,créer un site internet au Cameroun, web developer in cameroon, react developer in cameroon, mobile app developer in cameroon Africa",

  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
