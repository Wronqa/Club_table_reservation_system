import { HOURS, PersonalData } from '../types/ReservationContextTypes'
import { InitialState } from '../types/ReservationContextTypes'

export enum ACTIONS {
  setDate = 'setDate',
  setTime = 'setTime',
  setTable = 'setTable',
  setPersonalData = 'setPersonalData',
  requestStart = 'requestStart',
  requestError = 'requestError',
}
export type ReservationAction = {
  type: ACTIONS
  payload?: HOURS | Date | number | PersonalData | null
}
export type ReservationActions = {
  setDate: (state: InitialState, action: ReservationAction) => InitialState
  setTime: (state: InitialState, action: ReservationAction) => InitialState
  setTable: (state: InitialState, action: ReservationAction) => InitialState
  setPersonalData: (
    state: InitialState,
    action: ReservationAction
  ) => InitialState
  requestStart: (state: InitialState) => InitialState
  requestError: (state: InitialState) => InitialState
}
