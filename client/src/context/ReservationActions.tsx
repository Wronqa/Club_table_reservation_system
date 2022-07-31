import { ReservationActions as ReservationActionsType } from '../types/ReservationActionsTypes'
import { HOURS, PersonalData } from '../types/ReservationContextTypes'

export const ReservationActions: ReservationActionsType = {
  setDate: (state, action) => {
    return { ...state, date: action.payload as Date }
  },
  setTime: (state, action) => {
    return { ...state, time: action.payload as HOURS }
  },
  setTable: (state, action) => {
    return { ...state, table: action.payload as number }
  },
  setPersonalData: (state, action) => {
    return { ...state, personalData: action.payload as PersonalData }
  },
}
