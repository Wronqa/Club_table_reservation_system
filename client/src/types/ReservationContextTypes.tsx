import { Dispatch, ReactNode } from 'react'
import { ReservationAction } from './ReservationActionsTypes'

export type ReservationContextProps = {
  children: ReactNode
}
export enum HOURS {
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:300',
}
export type PersonalData = {
  name: string
  phoneNumber: string
  emailAddress: string
}
export type ReservationContext = {
  date: Date | null
  time: HOURS | null
  table: number | null
  personalData: PersonalData | null
  dispatch: Dispatch<ReservationAction> | null
}
