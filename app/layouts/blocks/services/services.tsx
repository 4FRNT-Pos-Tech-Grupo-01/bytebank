import { servicesData } from '@/data/global-data'
import ServiceCard from './service-card'

import Graphism from '@/assets/images/graphism-dark.svg'

export interface IServiceCard {
  subtitle: string
  type: string
}

interface IServices {
  title: string
  cards: IServiceCard[]
}

const Services = () => {
  const {cards, title} = servicesData as IServices

  return (
    <section className="relative flex flex-col bg-gray-medium p-8 pb-7 rounded-lg gap-8">
      <Graphism className='absolute bottom-0 left-0 w-[9rem] md:w-[11.25rem] h-auto' />
      <Graphism className='absolute top-0 right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180' />
      <h2 className="font-bold text-black text-2xl">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 relative z-10">
        {cards.map((card, index) => (
          <ServiceCard
            key={`card-${index}`}
            subtitle={card.subtitle}
            type={card.type}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
