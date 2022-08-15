import { CustomArea } from 'react-img-mapper'

export type Area = CustomArea & {
  name?: string
  seats?: number
  price?: number
  available?: boolean
}
export type MapperConfig = {
  id: number
  name: string
  coords: string | Array<number>
  seats: number
  price: number
  fillColor?: string
  strokeColor?: string
  shape?: string
  available?: boolean
}
export type Order = {
  date: Date
  time: string
  clientName: string
  email: string
  phone: string
  tableName: string
}
