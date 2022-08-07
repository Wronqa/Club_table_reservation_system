import { ReservationActions as ReservationActionsType } from '../types/ReservationActionsTypes'
import { HOURS, PersonalData } from '../types/ReservationContextTypes'

export const ReservationActions: ReservationActionsType = {
  setDate: (state, action) => {
    return { ...state, date: action.payload as Date, isFetching: false }
  },
  setTime: (state, action) => {
    return { ...state, time: action.payload as HOURS, isFetching: false }
  },
  setTable: (state, action) => {
    return { ...state, table: action.payload as number, isFetching: false }
  },
  setPersonalData: (state, action) => {
    return {
      ...state,
      personalData: action.payload as PersonalData,
      isFetching: false,
    }
  },
  requestStart: (state) => {
    return { ...state, isFetching: true }
  },
  requestError: (state) => {
    return { ...state, isFetching: false }
  },
}
