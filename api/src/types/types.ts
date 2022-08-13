export type OrderType = {
  date: Date
  time: string
  table_id: number
  client_id: number
  comment: string
}
export type PersonalDataType = {
  name: string
  emailAddress: string
  phoneNumber: string
}
export type TableType = {
  id: number
  name?: string
  coords?: string
  seats?: string
  price?: number
  available?: boolean
}
