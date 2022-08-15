import { HOURS } from './ReservationContextTypes'
import { InitialState } from './ReservationContextTypes'

export enum ACTIONS {
  setDate = 'setDate',
  setTime = 'setTime',
  setTable = 'setTable',
  requestStart = 'requestStart',
  requestSuccess = 'requestSuccess',
  requestError = 'requestError',
}
export type ReservationAction = {
  type: ACTIONS
  payload?: HOURS | Date | number | null | string
}
export type ReservationActions = {
  setDate: (state: InitialState, action: ReservationAction) => InitialState
  setTime: (state: InitialState, action: ReservationAction) => InitialState
  setTable: (state: InitialState, action: ReservationAction) => InitialState
  requestStart: (state: InitialState) => InitialState
  requestSuccess: (state: InitialState) => InitialState
  requestError: (state: InitialState) => InitialState
}
