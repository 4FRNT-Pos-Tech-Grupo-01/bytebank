const today = new Date()

export const getCurrentMonth =  new Intl.DateTimeFormat('pt-BR', {
  month: 'long',
}).format(today)

export const getCurrentDateShort =  new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(today)

export const getCurrentDate = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}).format(today)
