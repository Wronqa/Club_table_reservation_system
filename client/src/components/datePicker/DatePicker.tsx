import './datePicker.css'
import { useContext } from 'react'
import { ReservationContext } from '../../context/ReservationContext'
import { ACTIONS } from '../../types/ReservationActionsTypes'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'

export const DatePicker = () => {
  const clickHandler = function (info: DateClickArg) {
    dispatch({ type: ACTIONS.setDate, payload: info.dateStr })
  }

  const { dispatch } = useContext(ReservationContext)

  return (
    <div className='datePicker'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={450}
        selectable={true}
        dateClick={clickHandler}
      />
    </div>
  )
}
