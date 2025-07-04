import CustomSelect from '../select/Select';
import { Button } from '../button/Button';
import Input from '../input/Input';
import { TransactionFormProps } from './types';

const TransactionForm = ({
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {
  return (
    <form className="flex flex-col items-center lg:items-start md:items-start z-2">
      <CustomSelect
        borderColor="blue"
        options={transactionType}
        placeholder={placeholderSelect}
        className="mb-8 max-w-[350px] h-10"
      />
      <div className='max-w-[144px] md:max-w-[250px] lg:max-w-[250px]'>
        <Input
          placeholder={placeholderInput}
          className="border-[var(--color-green-dark)] mb-8 bg-white"
          id="price"
          label="Valor"
          labelStyle="text-white font-semibold text-center md:text-left lg:text-left"
          type="number"
        />
      </div>
      <div className='max-w-[144px] md:max-w-[250px] lg:max-w-[250px]'>
        <Button
          label="Concluir transação"
          onClick={() => {}}
          primary
          className="w-full bg-[var(--color-green-dark)] py-0"
        />
      </div>

    </form>
  );
};

export default TransactionForm;
