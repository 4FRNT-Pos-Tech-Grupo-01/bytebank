/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { bankStatementData, transactionsData } from '@/data/global-data'
import useLocalStorage from '@/hooks/use-local-storage'
import { IBankStatement, IBankStatementItem, ITransaction } from '@/types/types'

import EditIcon from '@/assets/icons/edit.svg'
import DeleteIcon from '@/assets/icons/delete.svg'
import Cta from '@/components/cta'
import CustomSelect from '@/components/select'
import Input from '@/components/input'
import { formatDate, formatMonth } from '@/utils/date'

const Crud = () => {
  const { subtitle, transactions } = bankStatementData as IBankStatement
  const {
    transactionType,
    placeholderSelect,
    placeholderDate,
    placeholderInput
  } = transactionsData as ITransaction
  const { storedValue, getValue, setValue } = useLocalStorage('statement', transactions)
  const [currentStatement, setCurrentStatement] = useState<IBankStatementItem[]>(storedValue)
  const [date, setDate] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [selectedTransaction, setSelectedTransaction] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [currentEditing, setCurrentEditing] = useState<number>(-1)

  useEffect(() => {
    setCurrentStatement(getValue())
  }, [storedValue])

  const editStatementItem = (index: number) => {
    setIsEditing(true)
    setCurrentEditing(index)
  }

  const deleteStatementItem = (index: number) => {
    setValue(currentStatement.filter((_, i) => i !== index))
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()

    if (currentEditing === -1) return
    const updatedStatement = [...currentStatement]
    updatedStatement[currentEditing] = {
      type: selectedTransaction,
      month: formatMonth(date),
      amount: Number(amount),
      date: formatDate(date),
    } as IBankStatementItem
    setValue(updatedStatement)
    setCurrentEditing(-1)
    setIsEditing(false)
  }

  return (
    <section className='lg:col-span-3 rounded-lg bg-white px-6 py-8'>
      <h2 className='text-[1.5625rem] font-semibold'>{subtitle}</h2>
      <ul>
        {currentStatement.map((transaction, index) => (
          <li
            key={`transaction-${index}`}
            className='relative group flex flex-col gap-2 pt-6 pb-2 border-b border-green'
          >
            {isEditing && currentEditing === index ? (
              <form className='flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-3 min-h-[4.5625rem] py-4 lg:py-0' onSubmit={handleSave}>
                <fieldset className='relative'>
                  <label className='absolute -top-5 left-0 text-xs text-green'>{placeholderSelect}</label>
                  <CustomSelect
                    borderColor="green"
                    options={transactionType}
                    className="w-full lg:min-w-[18.75rem]"
                    onValueChange={setSelectedTransaction}
                  />
                </fieldset>
                <fieldset className='relative'>
                  <label className='absolute -top-5 left-0 text-xs text-green' htmlFor="date">{placeholderDate}</label>
                  <Input
                    className="border-green bg-white h-[3.125rem]"
                    id='date'
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </fieldset>
                <fieldset className='relative'>
                  <label className='absolute -top-5 left-0 text-xs text-green' htmlFor="amount">Valor</label>
                  <Input
                    className="border-green bg-white h-[3.125rem] lg:w-[10rem]"
                    id="amount"
                    type="number"
                    placeholder={placeholderInput}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                  />
                </fieldset>
                <fieldset className='flex gap-3 lg:ml-auto'>
                  <Cta
                    type='button'
                    text='Cancelar'
                    variant='green-inverted'
                    className='w-fit'
                    onClick={() => setIsEditing(false)}
                  />
                  <Cta
                    type='submit'
                    text='Salvar'
                    variant='green'
                    className='w-fit'
                    onClick={() => {}}
                    disabled={Number(amount) <= 0  || !selectedTransaction}
                  />
                </fieldset>
              </form>
            ) : (
              <>
                <button className='absolute top-2 right-8 lg:opacity-0 lg:group-hover:opacity-100 duration-200 transition-all' onClick={() => editStatementItem(index)}>
                  <EditIcon className='w-6 h-6' />
                </button>
                <button className='absolute top-2 right-0 lg:opacity-0 lg:group-hover:opacity-100 duration-200 transition-all' onClick={() => deleteStatementItem(index)}>
                  <DeleteIcon className='w-6 h-6' />
                </button>
                <span className='text-xs text-green font-semibold'>
                  {transaction.month}
                </span>
                <div className='flex items-center justify-between'>
                  <p className='!leading-none'>
                    {transaction.type === 'deposit' ? 'Depósito' : 'Transferência'}
                  </p>
                  <span className='text-xs text-[#8B8B8B]'>{transaction.date}</span>
                </div>
                <span className='font-semibold'>
                  {`${transaction.type !== 'deposit' ? '-' : ''}R$ ${transaction.amount}`}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Crud
