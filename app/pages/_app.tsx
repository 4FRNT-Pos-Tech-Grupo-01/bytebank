import Modal from "@/components/modal"
import StateControllerProvider from "@/contexts/state-controller"
import { TransactionProvider } from "@/contexts/transaction-context"
import Footer from "@/structure/footer"
import Header from "@/structure/header"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={twMerge('font-inter', inter.className)}>
      <StateControllerProvider>
        <TransactionProvider>
          <Header />
          <main className="min-h-screen">
            <Component {...pageProps} />
          </main>
          <Footer />
          <Modal />
        </TransactionProvider>
      </StateControllerProvider>
    </div>
  )
}
