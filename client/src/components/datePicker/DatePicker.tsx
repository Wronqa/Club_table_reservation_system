import './datePicker.css'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction' // for selectable

export const DatePicker = () => {
  const clickHandler = function (info: any) {
    console.log(info)
  }

  return (
    <div className='datePicker'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={220}
        selectable={true}
        dateClick={clickHandler}
      />
    </div>
  )
}
