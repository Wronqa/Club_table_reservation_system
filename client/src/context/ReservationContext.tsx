import { useReducer } from 'preact/hooks'
import { createContext } from 'react'
import {
  ReservationContext as ReservationContextType,
  ReservationContextProps as ReservationContextPropsType,
} from '../types/ReservationContextTypes'
import { ReservationReducer } from './ReservationReducer'

const INITIAL_STATE: ReservationContextType = {
  date: null,
  time: null,
  table: null,
  personalData: null,
  dispatch: null,
}

export const ReservationContext =
  createContext<ReservationContextType>(INITIAL_STATE)

export const ReservationContextProvider = ({
  children,
}: ReservationContextPropsType) => {
  const [state, dispatch] = useReducer(ReservationReducer, INITIAL_STATE)
  return (
    <ReservationContext.Provider value={state}>
      {children}
    </ReservationContext.Provider>
  )
}
