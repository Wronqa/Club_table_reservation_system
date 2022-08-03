import React, { useContext } from 'react'
import './app.css'
import { DatePicker } from './components/datePicker/DatePicker'
import { TablePicker } from './components/tablePicker/TablePicker'
import { TimePicker } from './components/timePicker/TimePicker'
import { OrderSummary } from './components/orderSummary/OrderSummary'
import { ReservationContext } from './context/ReservationContext'

function App() {
  const { state, dispatch } = useContext(ReservationContext)
  const { date, time, table, personalData } = state

  console.log(state)
  const renderElement = () => {
    if (!date) return <DatePicker />
    else if (!time) return <TimePicker />
    else if (!table) return <TablePicker />
    else return <OrderSummary />
  }

  return <div className='App'>{renderElement()}</div>
}

export default App
