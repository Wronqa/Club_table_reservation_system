import React from 'react'
import './app.css'
import { DatePicker } from './components/datePicker/DatePicker'
import { TablePicker } from './components/tablePicker/TablePicker'
import { TimePicker } from './components/timePicker/TimePicker'

function App() {
  return (
    <div className='App'>
      <TablePicker />
    </div>
  )
}

export default App
