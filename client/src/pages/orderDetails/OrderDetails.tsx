import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import EventNoteIcon from '@mui/icons-material/EventNote'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { gerOrderDetails } from '../../apiCalls/orderCalls'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ReservationContext } from '../../context/ReservationContext'
import { formatDate } from '../../utils/dateFormatter'
import { Order as OrderType } from '../../types/ComponentsTypes'

import './orderDetails.css'

const OrderDetails = () => {
  const [order, setOrder] = useState<OrderType | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const { dispatch } = useContext(ReservationContext)
  const order_id = useParams().id

  useEffect(() => {
    let isMounted = true

    const getOrder = async () => {
      const res = await gerOrderDetails(dispatch, order_id)
      if (res.success && isMounted) setOrder(res.data)
    }
    getOrder()

    return () => {
      isMounted = false
    }
  }, [order_id])

  useEffect(() => {
    let isMounted = true

    isMounted && setLoading(false)

    return () => {
      isMounted = false
    }
  }, [order])

  return (
    <>
      {!isLoading && order && (
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
                <span className='orderDetails__listItemValue'>
                  {formatDate(order.date)}
                </span>
              </li>
              <li className='orderDetails__listItem'>
                <span className='orderDetails__listItemKey'>
                  <AccessTimeIcon className='orderDetails__listIcon' />
                  Time
                </span>
                <span className='orderDetails__listItemValue'>
                  {order.time}
                </span>
              </li>
              <li className='orderDetails__listItem'>
                <span className='orderDetails__listItemKey'>
                  <PersonIcon className='orderDetails__listIcon' />
                  Name
                </span>
                <span className='orderDetails__listItemValue'>
                  {order.clientName}
                </span>
              </li>

              <li className='orderDetails__listItem'>
                <span className='orderDetails__listItemKey'>
                  <EmailIcon className='orderDetails__listIcon' />
                  Email address
                </span>
                <span className='orderDetails__listItemValue'>
                  {order.email}
                </span>
              </li>
              <li className='orderDetails__listItem'>
                <span className='orderDetails__listItemKey'>
                  <LocalPhoneIcon className='orderDetails__listIcon' />
                  Phone number
                </span>
                <span className='orderDetails__listItemValue'>
                  {order.phone}
                </span>
              </li>
            </ul>
            <div className='orderDetails__product'>
              <span className='orderDetails__productTitle'>Your products</span>
              <span className='orderDetails__productDetails'>
                {order.tableName}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderDetails
