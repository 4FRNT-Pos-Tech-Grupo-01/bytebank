import { NextSeo } from "next-seo"
import AsideNav from "@/layouts/blocks/aside-nav"
import DashboardHero from "@/layouts/blocks/dashboard-hero"
import BankStatement from "@/layouts/blocks/bank-statement"
import useStateController from "@/hooks/use-state-controller"
import TransactionCard from "@/layouts/blocks/transactions"

export default function TransfersPage() {
  const {authStatus} = useStateController()
  const { refreshExtract } = useStateController()

  return (
    <>
      <NextSeo title="Bytebank | Transfers" />
      {authStatus && (
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
          <AsideNav />
          <div className="lg:col-span-7 flex flex-col gap-5">
            <DashboardHero />
            <TransactionCard />
          </div>
          <BankStatement key={refreshExtract} />
        </div>
      )}
    </>
  )
}
