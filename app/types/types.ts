export interface ICommonLink {
  text: string
  url: string
  blank: boolean
}

export interface ISocialLink {
  type: string
  url: string
  blank: boolean
}

export type ICtaVariant =
'green' |
'green-inverted' |
'orange' |
'orange-inverted' |
'black' |
'black-inverted'

export interface ICta {
  variant: ICtaVariant
  text: string
  className?: string
}
