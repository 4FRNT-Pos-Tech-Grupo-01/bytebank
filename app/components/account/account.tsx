import { accountData } from '@/data/global-data'
import { ICta } from '@/types/types'
import Image from 'next/image'
import React from 'react'

import imageOne from '@/assets/images/account-mobile.png'
import imageTwo from '@/assets/images/account-tablet.png'
import imageThree from '@/assets/images/account-desktop.png'
import AccountImage from '@/assets/images/account-image.svg'
import AccountForm from './account-form'

export interface IAccount {
  title: string
  nameLabel: string
  firstName: string
  lastName: string
  email: string
  emailLabel: string
  passLabel: string
  imageAlt: string
  cta: ICta
}

const Account = () => {
  const {
    imageAlt,
    title,
  } = accountData as IAccount

  return (
    <section className='relative min-h-[45.625rem] lg:min-h-[33rem] bg-gray-services-bg rounded-lg overflow-hidden p-5 md:px-[4.375rem] md:py-8 lg:px-8'>
      <Image
        className='absolute inset-0 md:hidden w-full h-full'
        alt={imageAlt}
        src={imageOne}
        quality={100}
        width={1200}
        height={700}
      />
      <Image
        className='absolute inset-0 hidden md:block lg:hidden w-full h-full'
        alt={imageAlt}
        src={imageTwo}
        quality={100}
        width={1200}
        height={700}
      />
      <Image
        className='absolute inset-0 hidden lg:block w-full h-full'
        alt={imageAlt}
        src={imageThree}
        quality={100}
        width={1200}
        height={700}
      />
      <div className='relative z-10 flex flex-col gap-5'>
        <h2 className='text-[1.5625rem] font-semibold text-black'>{title}</h2>
        <div className='flex flex-col lg:flex-row-reverse gap-8'>
          <AccountForm {...accountData as IAccount} />
          <picture className='block w-full lg:w-1/2'>
            <AccountImage className='w-full h-auto' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Account
