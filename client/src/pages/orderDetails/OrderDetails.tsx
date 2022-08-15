import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import EventNoteIcon from '@mui/icons-material/EventNote'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import './orderDetails.css'

const OrderDetails = () => {
  return (
    <div className='orderDetails'>
      <div className='orderDetails__wrapper'>
        <div className='orderDetails__titleSection'>
          <div className='orderDetails__titleSectionLeft'>
            <ShoppingCartIcon className='orderDetails__titleIcon' />
            <h1 className='orderDetails__title'>Your order</h1>
          </div>
          <div className='orderDetails__titleSectionRight'>
            <span className='orderDetails__orderStatus'>Accepted</span>
          </div>
        </div>
        <ul className='orderDetails__list'>
          <li className='orderDetails__listItem'>
            <span className='orderDetails__listItemKey'>
              <EventNoteIcon className='orderDetails__listIcon' />
              Date
            </span>
            <span className='orderDetails__listItemValue'>2020-12-15</span>
          </li>
          <li className='orderDetails__listItem'>
            <span className='orderDetails__listItemKey'>
              <AccessTimeIcon className='orderDetails__listIcon' />
              Time
            </span>
            <span className='orderDetails__listItemValue'>21:00</span>
          </li>
          <li className='orderDetails__listItem'>
            <span className='orderDetails__listItemKey'>
              <PersonIcon className='orderDetails__listIcon' />
              Name
            </span>
            <span className='orderDetails__listItemValue'>Jakub Wrona</span>
          </li>

          <li className='orderDetails__listItem'>
            <span className='orderDetails__listItemKey'>
              <EmailIcon className='orderDetails__listIcon' />
              Email address
            </span>
            <span className='orderDetails__listItemValue'>
              kuba.wrona@onet.pl
            </span>
          </li>
          <li className='orderDetails__listItem'>
            <span className='orderDetails__listItemKey'>
              <LocalPhoneIcon className='orderDetails__listIcon' />
              Phone number
            </span>
            <span className='orderDetails__listItemValue'>577810026</span>
          </li>
        </ul>
        <div className='orderDetails__products'>
          <span className='orderDetails__productsTitle'>Your products</span>
          <span className='orderDetails__productsName'>
            #819483 - Loża 1 I Loża 7-10 osobowa - Rezerwacja Loży - SALA GŁÓWNA
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
