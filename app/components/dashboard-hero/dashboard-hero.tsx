import Eye from '@/assets/icons/eye.svg'
import { accountData } from '@/data/global-data'
import { todayFormatted } from '@/utils/date'
import ManWithMoney from '@/assets/images/man-w-money-ilustration.svg'

const DashboardHero = () => {
  const {balance, firstName} = accountData
  const balanceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(balance)

  return (
    <section className="flex flex-col bg-primary p-8 pb-7 pr-30 rounded-lg min-h-100 md:items-start md:flex-row sm:items-center xs:items-center overflow-hidden">
      <div className='flex-1'>
        <h5 className="font-bold text-white text-2xl mb-6">Olá, {firstName}! :)</h5>
        <span className="text-white text-sm">{todayFormatted}</span>
        <ManWithMoney className="md:block lg:hidden xs:hidden text-[283px] mt-12" />
      </div>
      <div className="flex flex-col mt-24 ">
        <div className="flex items-center gap-6">
          <h4 className="font-semibold text-white text-xl">Saldo</h4>
          <Eye className="text-2xl" />
        </div>
        <hr
          className="mt-4 lg:bg-red md:bg-accent-text"
          style={{
            border: 'none',
            height: '2px',
          }}
        />
        <span className="text-white text-base mt-4">Conta corrente</span>
        <span className="font-bold text-white text-3xl mt-2">
          {balanceFormatted}
        </span>
      </div>
      <ManWithMoney className="md:hidden text-[283px] mt-12" />
    </section>
  )
}

export default DashboardHero
