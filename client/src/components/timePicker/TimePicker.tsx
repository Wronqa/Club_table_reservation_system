import './timePicker.css'

export const TimePicker = () => {
  return (
    <div className='timePicker'>
      <h1 className='timePicker__title'>
        What time do you want your reservation to start?
      </h1>
      <div className='timePicker__listWrapper'>
        <ul className='timePicker_list'>
          <li className='timePicker_listItem'>21:00</li>
          <li className='timePicker_listItem'>21:30</li>
          <li className='timePicker_listItem'>22:00</li>
          <li className='timePicker_listItem'>22:30</li>
          <li className='timePicker_listItem'>23:00</li>
        </ul>
      </div>
    </div>
  )
}
