import Footer from "@/structure/footer";
import Header from "@/structure/header";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextSeo title="Bytebank | Homepage" />
      <div className={`${inter.className} font-[family-name:var(--font-inter)]`}>
        <Header />
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
