import { useState } from 'react'

import useLocalStorage from '@/hooks/use-local-storage'

import { TransactionFormProps } from './types'
import useStateController from '@/hooks/use-state-controller'
import { getCurrentMonth, getCurrentDateShort } from '@/utils/date'
import CustomSelect from '@/components/select'
import Input from '@/components/input'
import Button from '@/components/button'
import { IBankStatementItem } from '@/types/types'

const TransactionForm = ({
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {
  const { storedValue, setValue } = useLocalStorage<IBankStatementItem[]>('statement', [])
  const { triggerRefresh } = useStateController()

  const [selectedTransaction, setSelectedTransaction] = useState<string>('')
  const [amount, setAmount] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newTransaction = {
      type: selectedTransaction,
      month: getCurrentMonth.replace(/^./, (str) => str.toUpperCase()),
      amount: Number(amount),
      date: getCurrentDateShort,
    } as IBankStatementItem

    setValue([...storedValue, newTransaction])

    // Use context for bank statement update
    triggerRefresh()

    setSelectedTransaction('')
    setAmount('')
  }

  return (
    <form className="flex flex-col items-center lg:items-start md:items-start z-2"
    onSubmit={handleSubmit}
    >
      <CustomSelect
        borderColor="blue"
        options={transactionType}
        placeholder={placeholderSelect}
        className="mb-8 max-w-[21.875rem] h-10"
        onValueChange={setSelectedTransaction}
      />
      <div className='max-w-[9rem] md:max-w-[15.625rem]'>
        <Input
          placeholder={placeholderInput}
          className="border-[var(--color-green-dark)] mb-8 bg-white"
          id="price"
          label="Valor"
          labelStyle="text-white font-semibold text-center md:text-left lg:text-left"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className='max-w-[9rem] md:max-w-[15.625rem]'>
        <Button
          label="Concluir transação"
          onClick={() => {}}
          primary
          className="w-full bg-[var(--color-green-dark)] py-0"
          type="submit"
          disabled={Number(amount) <= 0  || !selectedTransaction}
        />
      </div>

    </form>
  )
}

export default TransactionForm
