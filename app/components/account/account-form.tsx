import React from 'react'
import Input from '../input/Input'
import { IAccount } from './account'
import Cta from '../cta'
import { useRouter } from 'next/router'

const AccountForm: React.FC<IAccount> = ({
  cta,
  email,
  emailLabel,
  firstName,
  lastName,
  nameLabel,
  passLabel
}) => {
  const router = useRouter()

  return (
    <form className='lg:w-1/2 flex flex-col gap-6'>
      <Input
        name='name'
        type='text'
        label={nameLabel}
        placeholder={`${firstName} ${lastName}`}
        id='name'
      />
      <Input
        name='email'
        type='email'
        label={emailLabel}
        placeholder={email}
        id='email'
      />
      <Input
        type='password'
        label={passLabel}
        placeholder='******'
        id='password'
      />
      <Cta
        onClick={() => router.push('/')}
        className='md:w-fit'
        type='button'
        {...cta}
      />
    </form>
  )
}

export default AccountForm
