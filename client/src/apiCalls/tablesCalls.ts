import { ReservationAction, ACTIONS } from '../types/ReservationActionsTypes'
import { Dispatch } from 'react'
import axios from 'axios'

export const getAllTablesCall = async (
  dispatch: Dispatch<ReservationAction>,
  date: Date
) => {
  dispatch({ type: ACTIONS.requestStart })

  try {
    const res = await axios.get('/tables', {
      params: {
        date,
      },
    })

    dispatch({ type: ACTIONS.requestStart })

    return res.data
  } catch (err) {
    dispatch({ type: ACTIONS.requestError })
    return null
  }
}
