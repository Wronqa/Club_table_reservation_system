import { ReservationContext } from '../../context/ReservationContext'
import { useContext } from 'react'
import { HOURS } from '../../types/ReservationContextTypes'
import { ACTIONS } from '../../types/ReservationActionsTypes'

import './timePicker.css'

export const TimePicker = () => {
  const { dispatch } = useContext(ReservationContext)

  const handleClick = (key: string) => {
    dispatch({ type: ACTIONS.setTime, payload: key as HOURS })
  }

  return (
    <div className='timePicker'>
      <h1 className='timePicker__title'>
        What time do you want your reservation to start?
      </h1>
      <div className='timePicker__listWrapper'>
        <ul className='timePicker_list'>
          {(
            Object.keys(HOURS).filter((el) => {
              return isNaN(Number(el))
            }) as Array<keyof typeof HOURS>
          ).map((el, index) => {
            return (
              <li
                className='timePicker_listItem'
                key={index}
                onClick={() => handleClick(el)}
              >
                {el}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
