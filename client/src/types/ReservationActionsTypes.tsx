import { HOURS, PersonalData } from '../types/ReservationContextTypes'
import { ReservationInfo as ReservationInfoType } from '../types/ReservationContextTypes'

export enum ACTIONS {
  setDate = 'setDate',
  setTime = 'setTime',
  setTable = 'setTable',
  setPersonalData = 'setPersonalData',
}
export type ReservationAction = {
  type: ACTIONS
  payload: HOURS | Date | number | PersonalData | null
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
