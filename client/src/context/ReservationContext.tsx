import { createContext, useReducer } from 'react'
import {
  ReservationContext as ReservationContextType,
  ReservationContextProps as ReservationContextPropsType,
  ReservationInfo as ReservationInfoType,
} from '../types/ReservationContextTypes'
import { ReservationReducer } from './ReservationReducer'

const INITIAL_STATE: ReservationInfoType = {
  date: null,
  time: null,
  table: null,
  personalData: null,
}

export const ReservationContext = createContext<ReservationContextType>({
  state: INITIAL_STATE,
  dispatch: () => null,
})

export const ReservationContextProvider = ({
  children,
}: ReservationContextPropsType) => {
  
  const [state, dispatch] = useReducer(ReservationReducer, INITIAL_STATE)
  return (
    <ReservationContext.Provider value={{ state, dispatch }}>
      {children}
    </ReservationContext.Provider>
  )
}
