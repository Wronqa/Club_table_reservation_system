import { ReservationAction as ReservationActionType } from '../types/ReservationActionsTypes'
import { ReservationContext as ReservationContextType } from '../types/ReservationContextTypes'
import { ReservationActions } from './ReservationActions'

export const ReservationReducer = (
  state: ReservationContextType,
  action: ReservationActionType
) => {
  const handler = ReservationActions[action.type]
  return handler(state, action)
}
