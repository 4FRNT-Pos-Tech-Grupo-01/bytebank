import { bankStatementData } from '@/data/global-data'
import useLocalStorage from '@/hooks/use-local-storage'
import { formatDate, formatMonth } from '@/utils/date'
import React, { useEffect, useState } from 'react'

interface IBankStatementItem {
  date: string
  amount: number
  type: 'deposit' | 'transfer'
}

export interface IBankStatement {
  title: string
  transactions: IBankStatementItem[]
}

const BankStatement = () => {
  const { title, transactions } = bankStatementData as IBankStatement
  const { storedValue } = useLocalStorage('statement', transactions)
  const [currentStatement, setCurrentStatement] = useState<IBankStatementItem[]>(storedValue)

  useEffect(() => {
    setCurrentStatement(storedValue)
  }, [storedValue])

  return (
    <section className='lg:col-span-3 rounded-lg bg-white px-6 py-8'>
      <h2 className='text-[1.5625rem] font-semibold'>{title}</h2>
      <ul>
        {currentStatement.map((transaction, index) => (
          <li
            key={`transaction-${index}`}
            className='flex flex-col gap-2 pt-6 pb-2 border-b border-green'
          >
            <span className='text-xs text-green font-semibold'>
              {formatMonth(transaction.date)}
            </span>
            <div className='flex items-center justify-between'>
              <p className='!leading-none'>
                {transaction.type === 'deposit' ? 'Depósito' : 'Transferência'}
              </p>
              <span className='text-xs text-[#8B8B8B]'>{formatDate(transaction.date)}</span>
            </div>
            <span className='font-semibold'>
              {`${transaction.type !== 'deposit' ? '-' : ''}R$ ${transaction.amount}`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BankStatement
