import { CustomArea } from 'react-img-mapper'

export type Area = CustomArea & {
  name?: string
  seats?: number
  price?: number
  available?: boolean
}
