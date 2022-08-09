import { Dispatch, ReactNode } from 'react'
import { ReservationAction } from './ReservationActionsTypes'

export type ReservationContextProps = {
  children: ReactNode
}
export enum HOURS {
  '21:00' = '21:00',
  '21:30' = '21:30',
  '22:00' = '22:00',
  '22:30' = '22:30',
  '23:00' = '23:00',
}
export type PersonalData = {
  name: string
  phoneNumber: string
  emailAddress: string
}
export type InitialState = {
  date: Date | null
  time: HOURS | null
  table: number | null
  isFetching: boolean
  error: Error | null
}
export type ReservationContext = {
  state: InitialState
  dispatch: Dispatch<ReservationAction>
}
