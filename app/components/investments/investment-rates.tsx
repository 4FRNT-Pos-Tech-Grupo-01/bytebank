import RateCard from './investment-rate-card';
import { InvestmentsData } from '@/data/global-data';
import { InvestmentProps } from './types';
import { currencyFormatedToReal } from '@/utils/currency';

const InvestmentRates = () => {
  const { rates } = InvestmentsData as InvestmentProps;

  return (
    <div className="flex gap-6 flex-col md:flex-row">
      {rates &&
        rates.map((rate) => (
          <RateCard>
            <p className="text-1">{rate.title}</p>
            <p className="text-2">R$ {currencyFormatedToReal(rate.price)}</p>
          </RateCard>
        ))}
    </div>
  );
};

export default InvestmentRates;
