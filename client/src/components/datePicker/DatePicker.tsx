import './datePicker.css'
import { useContext } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction' // for selectable
import { ReservationContext } from '../../context/ReservationContext'
import { ACTIONS } from '../../types/ReservationActionsTypes'

export const DatePicker = () => {
  const clickHandler = function (info: DateClickArg) {
    dispatch({ type: ACTIONS.setDate, payload: info.dateStr })
  }

  const { state, dispatch } = useContext(ReservationContext)

  return (
    <div className='datePicker'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={450}
        selectable={true}
        dateClick={clickHandler}
        events={[
          {
            groupId: 'testGroupId',
            title: 'Czwarteczki',
            daysOfWeek: ['4'],
            display: 'background',
            backgroundColor: 'red',
            textColor: 'white',
            className: 'elo',
          },
          {
            groupId: 'testGroupId',
            title: 'Piateczki',
            daysOfWeek: ['5'],
            display: 'background',

            textColor: 'white',
            className: 'elo',
            color: 'white',
          },
          {
            groupId: 'testGroupId',
            title: 'Soboty',
            daysOfWeek: ['6'],
            display: 'background',
            backgroundColor: 'red',
            textColor: 'white',
            className: 'elo',
          },
        ]}
      />
    </div>
  )
}
