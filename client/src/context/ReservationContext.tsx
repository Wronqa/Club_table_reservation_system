import { createContext, useReducer } from 'react'
import {
  ReservationContext as ReservationContextType,
  ReservationContextProps as ReservationContextPropsType,
  InitialState as InitialStateType,
} from '../types/ReservationContextTypes'
import { ReservationReducer } from './ReservationReducer'

const INITIAL_STATE: InitialStateType = {
  date: null,
  time: null,
  table: null,
  personalData: null,
  isFetching: false,
  error: null,
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
