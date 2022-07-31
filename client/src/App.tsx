import React from 'react'
import './app.css'
import { DatePicker } from './components/datePicker/DatePicker'
import { TablePicker } from './components/tablePicker/TablePicker'
import { TimePicker } from './components/timePicker/TimePicker'

function App() {
  return (
    <div className='App'>
      <DatePicker />
    </div>
  )
}

export default App
