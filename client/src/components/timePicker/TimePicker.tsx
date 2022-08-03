import { ReservationContext } from '../../context/ReservationContext'
import './timePicker.css'
import { MouseEventHandler, useContext } from 'react'
import { HOURS } from '../../types/ReservationContextTypes'
import { ACTIONS } from '../../types/ReservationActionsTypes'

export const TimePicker = () => {
  const { state, dispatch } = useContext(ReservationContext)

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
          {}
        </ul>
      </div>
    </div>
  )
}
