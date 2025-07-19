/* eslint-disable react-hooks/exhaustive-deps */
import { bankStatementData } from '@/data/global-data'
import useLocalStorage from '@/hooks/use-local-storage'
import { IBankStatement, IBankStatementItem } from '@/types/types'
import React, { useEffect, useState } from 'react'

const BankStatement = () => {
  const { title, transactions } = bankStatementData as IBankStatement
  const { storedValue, getValue } = useLocalStorage('statement', transactions)
  const [currentStatement, setCurrentStatement] = useState<IBankStatementItem[]>(storedValue)

  useEffect(() => {
    setCurrentStatement(getValue())
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
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BankStatement
