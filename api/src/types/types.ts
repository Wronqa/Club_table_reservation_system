export type Order = {
  date: Date
  time: string
  table_id: number
  client_id: number
  comment: string
  public_id: string
}
export type PersonalData = {
  name: string
  emailAddress: string
  phoneNumber: string
}
export type Table = {
  id: number
  name?: string
  coords?: string
  seats?: string
  price?: number
  available?: boolean
}
export type MailDetails = {
  from: string
  to: string
  subject: string
  html: string
}
export type TableNameConstructor = {
  name: string
  seats: number
  price: number
}
export type EmailPatternDetails = {
  name: string
  date: Date
  time: string
  tableName: string
  phone: string
  link: string
}
