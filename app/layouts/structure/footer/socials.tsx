import Link from 'next/link'
import React from 'react'

import Instagram from '@/assets/icons/instagram.svg'
import WhatsApp from '@/assets/icons/whatsapp.svg'
import Youtube from '@/assets/icons/youtube.svg'
import { ISocialLink } from '@/types/types'

interface Properties {
  data: ISocialLink[]
}

const Socials: React.FC<Properties> = ({data}) => {
  const socialIconSelector = (type: string) => {
    switch (type) {
      case 'instagram':
        return <Instagram className='w-8 h-8' />
      case 'whatsapp':
        return <WhatsApp className='w-8 h-8' />
      case 'youtube':
        return <Youtube className='w-8 h-8' />
      default:
        return null
    }
  }

  return (
    <ul className='flex items-center gap-6'>
      {data.map((socialLink, index) => (
        <li key={`social-link-${index}`}>
          <Link href={socialLink.url} target='_blank' className='opacity-100 hover:opacity-70 transition-opacity duration-200'>
            {socialIconSelector(socialLink.type)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Socials
