import {
  InitialState as InitialStateType,
  PersonalData as PersonalDataType,
} from './../types/ReservationContextTypes'
import { ACTIONS } from './../types/ReservationActionsTypes'
import { Dispatch } from 'react'
import { ReservationAction } from '../types/ReservationActionsTypes'
import axios from 'axios'

export const newOrderCall = async (
  { date, time, table }: InitialStateType,
  personalData: PersonalDataType,
  dispatch: Dispatch<ReservationAction>,
  comment: string | null
) => {
  dispatch({ type: ACTIONS.requestStart })

  try {
    const res = await axios.post('/reservation', {
      personalData,
      comment,
      reservationInfo: { date, time, table_id: table },
    })

    console.log(res)

    dispatch({ type: ACTIONS.requestSuccess })
  } catch (err) {
    console.log(err)
    dispatch({ type: ACTIONS.requestError })
  }
}
