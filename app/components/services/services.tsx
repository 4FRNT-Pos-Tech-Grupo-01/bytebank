import Loan from '@/assets/icons/loan.svg'
import Card from '@/assets/icons/card.svg'
import Donation from '@/assets/icons/donation.svg'
import Pix from '@/assets/icons/pix.svg'
import Insurance from '@/assets/icons/insurance.svg'
import CellPhone from '@/assets/icons/cell-phone.svg'
import ServiceCard from './service-card'

const Services = () => {
  const serviceSvgClassName = "md:text-6xl text-7xl"

  const serviceCards = [
    {
      name: "Empréstimo",
      icon: <Loan className={serviceSvgClassName} />
    },
    {
      name: "Meus cartões",
      icon: <Card className={serviceSvgClassName} />
    },
    {
      name: "Doações",
      icon: <Donation className={serviceSvgClassName} />
    },
    {
      name: "Pix",
      icon: <Pix className={serviceSvgClassName} />
    },
    {
      name: "Seguros",
      icon: <Insurance className={serviceSvgClassName} />
    },
    {
      name: "Crédito celular",
      icon: <CellPhone className={serviceSvgClassName} />
    },
  ]

  return (
  <section className="flex flex-col bg-background-service-options p-8 pb-7 rounded-lg gap-8">
    <h5 className="font-bold text-black text-2xl">
      <span className="block sm:hidden xs:hidden">Confira os serviços disponíveis</span>
      <span className="hidden sm:block xs:block">Nova transação</span>
    </h5>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
      {serviceCards.map((serviceCard, i) => (
        <ServiceCard key={`${serviceCard.name}-${i}`} icon={serviceCard.icon} name={serviceCard.name} />
      ))}
    </div>
  </section>
  )
}

export default Services
