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
