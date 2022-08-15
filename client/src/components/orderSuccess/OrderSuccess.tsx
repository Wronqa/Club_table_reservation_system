import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import './orderSuccess.css'

export const OrderSuccess = () => {
  return (
    <div className='orderSuccess'>
      <div className='orderSuccess__wrapper'>
        <h1 className='orderSuccess__title'>Reservation successfully!</h1>
        <div className='orderSuccess_body'>
          <CheckCircleOutlineIcon className='orderSuccess__icon' />
          <span className='orderSuccess__desc'>
            Your order has been accepted. We have sent the order confirmation to
            your e-mail address. You can pay for the ordered table in the
            restaurant.
          </span>
        </div>
      </div>
    </div>
  )
}
