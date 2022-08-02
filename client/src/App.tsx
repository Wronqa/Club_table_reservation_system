import React from 'react'
import './app.css'
import { DatePicker } from './components/datePicker/DatePicker'
import { TablePicker } from './components/tablePicker/TablePicker'
import { TimePicker } from './components/timePicker/TimePicker'
import { OrderSummary } from './components/orderSummary/OrderSummary'
import { ReservationContextProvider } from './context/ReservationContext'

function App() {
  return (
    <ReservationContextProvider>
      <div className='App'>
        <OrderSummary />
      </div>
    </ReservationContextProvider>
  )
}

export default App
