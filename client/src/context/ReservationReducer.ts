import { ReservationAction as ReservationActionType } from '../types/ReservationActionsTypes'
import { ReservationInfo as ReservationInfoType } from '../types/ReservationContextTypes'
import { ReservationActions } from './ReservationActions'

export const ReservationReducer = (
  state: ReservationInfoType,
  action: ReservationActionType
) => {
  const handler = ReservationActions[action.type]
  return handler(state, action)
}
