import React from 'react'
import './app.css'
import { DatePicker } from './components/datePicker/DatePicker'
import { TablePicker } from './components/tablePicker/TablePicker'
import { TimePicker } from './components/timePicker/TimePicker'
import { OrderSummary } from './components/orderSummary/OrderSummary'

function App() {
  return (
    <div className='App'>
      <OrderSummary />
    </div>
  )
}

export default App
