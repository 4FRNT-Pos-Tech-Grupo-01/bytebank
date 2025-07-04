import AsideNav from "@/components/aside-nav"
import DashboardHero from "@/components/dashboard-hero"
import BankStatement from "@/components/bank-statement"

import { NextSeo } from "next-seo"
import useStateController from "@/hooks/use-state-controller"
import LoggedOutLayout from "@/components/logged-out-layout/logged-out-layout"

export default function Home() {
  const {authStatus} = useStateController()

  return (
    <>
      <NextSeo title="Bytebank | Homepage" />
      {authStatus ? (
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
          <AsideNav />
          <div className="lg:col-span-7 flex flex-col gap-5">
            <DashboardHero />
          </div>
          <BankStatement />
        </div>
      ) : (
        <div className="w-screen min-h-screen py-10 bg-gradient-to-b from-green-dark to-white">
          <div className="container">
            <LoggedOutLayout />
          </div>
        </div>
      )}
    </>
  )
}
