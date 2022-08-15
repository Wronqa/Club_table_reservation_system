import React, { useContext } from 'react'
import './app.css'
import { DatePicker } from './components/datePicker/DatePicker'
import { TablePicker } from './components/tablePicker/TablePicker'
import { TimePicker } from './components/timePicker/TimePicker'
import { OrderSummary } from './components/orderSummary/OrderSummary'
import { ReservationContext } from './context/ReservationContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './pages/errorPage/Error'
import OrderDetails from './pages/orderDetails/OrderDetails'

function App() {
  const { state } = useContext(ReservationContext)
  const { date, time, table } = state

  const renderElement = () => {
    if (!date) return <DatePicker />
    else if (!time) return <TimePicker />
    else if (!table) return <TablePicker />
    else return <OrderSummary />
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={renderElement()} />
          <Route path='/order/:id' element={<OrderDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
