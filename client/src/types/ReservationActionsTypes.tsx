import { HOURS, PersonalData } from '../types/ReservationContextTypes'
import { ReservationContext as ReservationContextType } from '../types/ReservationContextTypes'

enum ACTIONS {
  setDate = 'setDate',
  setTime = 'setTime',
  setTable = 'setTable',
  setPersonalData = 'setPersonalData',
}
export type ReservationAction = {
  type: ACTIONS
  payload: Date | HOURS | number | PersonalData
}
export type ReservationActions = {
  setDate: (
    state: ReservationContextType,
    action: ReservationAction
  ) => ReservationContextType
  setTime: (
    state: ReservationContextType,
    action: ReservationAction
  ) => ReservationContextType
  setTable: (
    state: ReservationContextType,
    action: ReservationAction
  ) => ReservationContextType
  setPersonalData: (
    state: ReservationContextType,
    action: ReservationAction
  ) => ReservationContextType
}
