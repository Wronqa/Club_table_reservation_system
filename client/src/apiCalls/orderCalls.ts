import { ACTIONS } from '../types/ReservationActionsTypes'
import { Dispatch } from 'react'
import { ReservationAction } from '../types/ReservationActionsTypes'
import axios from 'axios'
import {
  InitialState as InitialStateType,
  PersonalData as PersonalDataType,
} from '../types/ReservationContextTypes'

export const newOrderCall = async (
  { date, time, table }: InitialStateType,
  personalData: PersonalDataType,
  dispatch: Dispatch<ReservationAction>,
  comment: string | null
) => {
  dispatch({ type: ACTIONS.requestStart })

  try {
    const res = await axios.post('/order', {
      personalData,
      comment,
      reservationInfo: { date, time, table_id: table },
    })

    dispatch({ type: ACTIONS.requestSuccess })

    return res
  } catch (err) {
    dispatch({ type: ACTIONS.requestError })
    return null
  }
}
export const gerOrderDetails = async (
  dispatch: Dispatch<ReservationAction>,
  id: string | undefined
) => {
  dispatch({ type: ACTIONS.requestStart })
  try {
    const res = await axios.get(`/order/${id}`)

    dispatch({ type: ACTIONS.requestSuccess })
    return res.data
  } catch (err) {
    dispatch({ type: ACTIONS.requestError })
    return null
  }
}
