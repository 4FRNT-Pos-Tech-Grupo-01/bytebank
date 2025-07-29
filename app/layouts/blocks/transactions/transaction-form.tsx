import { useState } from 'react'

import useLocalStorage from '@/hooks/use-local-storage'

import { TransactionFormProps } from './types'
import useStateController from '@/hooks/use-state-controller'
import { getCurrentMonth, getCurrentDateShort } from '@/utils/date'
import CustomSelect from '@/components/select'
import Input from '@/components/input'
import Button from '@/components/button'
import { IBankStatement, IBankStatementItem } from '@/types/types'
import { getBalanceByBankStatement } from '@/utils/bank-statement-calc'
import { bankStatementData } from '@/data/global-data'

import {toast} from 'react-toastify'

const TransactionForm = ({
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {
  const { storedValue, setValue } = useLocalStorage<IBankStatementItem[]>('statement', [])
  const { triggerRefresh } = useStateController()

  const { transactions } = bankStatementData as IBankStatement
  const { getValue: storedBalance } = useLocalStorage('statement', transactions)
  const calculatedBalance = getBalanceByBankStatement(storedBalance())


  const [selectedTransaction, setSelectedTransaction] = useState<string>('')
  const [amount, setAmount] = useState<string>('')


  const isInsufficientBalance = () =>
  selectedTransaction === 'transfer' && (calculatedBalance - Number(amount)) < 0

  function showInsufficientBalanceMessage() {
    toast.warning('Saldo insuficiente')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isInsufficientBalance()) {
      showInsufficientBalanceMessage()
      return
    }

    const newTransaction = {
      type: selectedTransaction,
      month: getCurrentMonth.replace(/^./, (str) => str.toUpperCase()),
      amount: Number(amount),
      date: getCurrentDateShort,
    } as IBankStatementItem

    setValue([...storedValue, newTransaction])
    toast.success('Transação realizada com sucesso!')
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
        className="mb-8 max-w-[21.875rem]"
        onValueChange={setSelectedTransaction}
      />
      <div className='max-w-[9rem] md:max-w-[15.625rem]'>
        <div className='w-full'>
        <Input
          placeholder={placeholderInput}
          className="border-[var(--color-green-dark)] mb-8 bg-white text-center md:text-left"
          id="price"
          label="Valor"
          labelStyle="text-white font-semibold text-center md:text-left lg:text-left"
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        </div>
      </div>
      <div className='max-w-[9rem] md:max-w-[15.625rem]'>
        <div className='w-full'>
        <Button
          label="Concluir transação"
          onClick={() => {}}
          primary
          className="bg-[var(--color-green-dark)] py-0 md:min-w-[200px]"
          type="submit"
          disabled={Number(amount) <= 0  || !selectedTransaction}
          fullWidth
        />
        </div>
      </div>

    </form>
  )
}

export default TransactionForm
