import { ReservationAction, ACTIONS } from './../types/ReservationActionsTypes'
import { Dispatch } from 'react'
import axios from 'axios'

export const getAllTablesCall = async (
  dispatch: Dispatch<ReservationAction>
) => {
  dispatch({ type: ACTIONS.requestStart })

  try {
    const res = await axios.get('/tables')
    dispatch({ type: ACTIONS.requestStart })
    return res.data
  } catch (err) {
    console.log(err)
    dispatch({ type: ACTIONS.requestError })
  }
}
