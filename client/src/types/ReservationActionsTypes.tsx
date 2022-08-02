import { HOURS, PersonalData } from '../types/ReservationContextTypes'
import { ReservationInfo as ReservationInfoType } from '../types/ReservationContextTypes'

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
    state: ReservationInfoType,
    action: ReservationAction
  ) => ReservationInfoType
  setTime: (
    state: ReservationInfoType,
    action: ReservationAction
  ) => ReservationInfoType
  setTable: (
    state: ReservationInfoType,
    action: ReservationAction
  ) => ReservationInfoType
  setPersonalData: (
    state: ReservationInfoType,
    action: ReservationAction
  ) => ReservationInfoType
}
