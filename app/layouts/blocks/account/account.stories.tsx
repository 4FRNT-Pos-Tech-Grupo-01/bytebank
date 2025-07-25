import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Account from './account'
import React from 'react'

const meta: Meta<typeof Account> = {
  title: 'Blocos/Account',
  component: Account,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
  O componente **Account** renderiza uma a página com informações do **Perfil**, onde é possível alterá-las.`,
      },
    },
  }
}

export default meta

type Story = StoryObj<typeof meta>

// Mock dos componentes SVG para evitar problemas no Storybook
const MockGraphism = () => (
  <svg width="144" height="144" viewBox="0 0 144 144" fill="currentColor" className="text-gray-300">
    <rect width="144" height="144" fill="currentColor" opacity="0.1"/>
    <circle cx="72" cy="72" r="60" fill="currentColor" opacity="0.2"/>
    <circle cx="72" cy="72" r="40" fill="currentColor" opacity="0.3"/>
  </svg>
)

const MockAccountImage = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="currentColor" className="text-gray-400">
    <rect width="400" height="300" fill="currentColor" opacity="0.1"/>
    <circle cx="200" cy="150" r="80" fill="currentColor" opacity="0.3"/>
    <rect x="160" y="250" width="80" height="20" fill="currentColor" opacity="0.2"/>
  </svg>
)

// Mock do AccountForm para evitar dependências do Next.js
const MockAccountForm = () => (
  <div className="lg:w-1/2 flex flex-col gap-6 p-4 bg-white rounded-lg">
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Nome</label>
      <input
        type="text"
        placeholder="Joana da Silva Oliveira"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        placeholder="joanadasilvaoliveira@email.com.br"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Senha</label>
      <input
        type="password"
        placeholder="******"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>
    <button className="px-5 py-3 bg-orange text-white border-2 border-orange rounded-lg font-semibold hover:bg-transparent hover:text-orange transition-colors duration-300 md:w-fit">
      Salvar alterações
    </button>
  </div>
)

// Mock do componente Account para Storybook
const MockAccount = () => (
  <section className='relative min-h-[45.625rem] lg:min-h-[33rem] bg-gray-medium rounded-lg overflow-hidden p-5 md:px-[4.375rem] md:py-8 lg:px-8'>
    <div className='absolute bottom-0 left-0 w-[9rem] md:w-[11.25rem] h-auto'>
      <MockGraphism />
    </div>
    <div className='absolute top-0 right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180'>
      <MockGraphism />
    </div>
    <div className='relative z-10 flex flex-col gap-5'>
      <h2 className='text-[1.5625rem] font-semibold text-black'>Minha conta</h2>
      <div className='flex flex-col lg:flex-row-reverse gap-8'>
        <MockAccountForm />
        <div className='block w-full lg:w-1/2'>
          <MockAccountImage />
        </div>
      </div>
    </div>
  </section>
)

export const Default: Story = {
  render: () => <MockAccount />,
  parameters: {
    viewport: {
        defaultViewport: 'desktop',
      },
  }
}


