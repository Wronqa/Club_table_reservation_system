import { ReservationAction as ReservationActionType } from '../types/ReservationActionsTypes'
import { InitialState as InitialStateType } from '../types/ReservationContextTypes'
import { ReservationActions } from './ReservationActions'

export const ReservationReducer = (
  state: InitialStateType,
  action: ReservationActionType
) => {
  const handler = ReservationActions[action.type]
  return handler ? handler(state, action) : state
}
