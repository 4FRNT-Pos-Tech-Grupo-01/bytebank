import AsideNav from "@/components/aside-nav"
import { NextSeo } from "next-seo"
import useStateController from "@/hooks/use-state-controller"
import Account from "@/components/account"

export default function AccountPage() {
  const {authStatus} = useStateController()

  return (
    <>
      <NextSeo title="Bytebank | Account" />
      {authStatus && (
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
          <AsideNav />
          <div className="lg:col-span-10">
            <Account />
          </div>
        </div>
      )}
    </>
  )
}
