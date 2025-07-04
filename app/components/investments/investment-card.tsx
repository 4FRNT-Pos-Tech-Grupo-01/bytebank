import Image from 'next/image';
import InvestmentCardLayout from './investment-card-layout';
import InvestmentHeader from './investment-header';
import InvestmentRates from './investment-rates';
import InvestmentChart from './investment-chart';
import backgroundImg from '@/assets/images/transaction-desktop.png';
import { InvestmentProps } from './types';
import { InvestmentsData } from '@/data/global-data';

const InvestmentCard = () => {
  const { sectionTitle } = InvestmentsData as InvestmentProps;

  return (
    <InvestmentCardLayout>
      <Image
        className="absolute top-0 left-0 w-full h-full z-0"
        src={backgroundImg}
        alt=""
        aria-hidden="true"
      />
      <div className="relative">
        <InvestmentHeader />
        <InvestmentRates />
        <p className="text-black text-xl font-normal mt-10 mb-8">{sectionTitle}</p>
        <InvestmentChart />
      </div>
    </InvestmentCardLayout>
  );
};

export default InvestmentCard;
