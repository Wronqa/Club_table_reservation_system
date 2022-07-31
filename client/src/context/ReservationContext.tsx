import { createContext } from 'react'
import {
  ReservationContext as ReservationContextType,
  ReservationContextProps as ReservationContextPropsType,
} from '../types/ReservationContextTypes'

const INITIAL_STATE: ReservationContextType = {
  date: null,
  time: null,
  table: null,
  personalData: null,
}
export const ReservationContext =
  createContext<ReservationContextType>(INITIAL_STATE)

export const ReservationContextProvider = ({
  children,
}: ReservationContextPropsType) => {
  return (
    <ReservationContext.Provider value={{} as ReservationContextType}>
      {children}
    </ReservationContext.Provider>
  )
}
