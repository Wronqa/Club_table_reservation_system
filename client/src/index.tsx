import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ReservationContextProvider } from './context/ReservationContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ReservationContextProvider>
      <App />
    </ReservationContextProvider>
  </React.StrictMode>
)
