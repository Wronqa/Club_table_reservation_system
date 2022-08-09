import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useContext,
  useState,
} from 'react'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import BorderOuterOutlinedIcon from '@mui/icons-material/BorderOuterOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check'
import './orderSummary.css'
import { ReservationContext } from '../../context/ReservationContext'
import { formatDate } from '../../utils/dateFormatter'
import { ACTIONS } from '../../types/ReservationActionsTypes'
import { PersonalData as PersonalDataType } from '../../types/ReservationContextTypes'

export const OrderSummary = () => {
  const [personalData, setPersonalData] = useState<PersonalDataType>({
    name: '',
    phoneNumber: '',
    emailAddress: '',
  })
  const [comment, setComment] = useState<string>('')
  const { state, dispatch } = useContext(ReservationContext)

  const changeDateHandler = () => {
    dispatch({ type: ACTIONS.setDate, payload: null })
    dispatch({ type: ACTIONS.setTime, payload: null })
  }
  const orderEditHandler = () => {
    dispatch({ type: ACTIONS.setTable, payload: null })
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(personalData)

    ///dispatch({type:ACTIONS.setPersonalData, payload:})
  }
  return (
    <div className='orderSummary'>
      <div className='orderSummary__container'>
        <div className='orderSummary__top'>
          <div className='orderSummary__dateInfo'>
            <div className='orderSummary__dateItem'>
              <EventNoteOutlinedIcon className='orderSummary__icon' />
              <span className='orderSummary__date'>
                {formatDate(state.date as Date)}
              </span>
            </div>
            <div className='orderSummary__dateItem'>
              <AccessTimeOutlinedIcon className='orderSummary__icon' />
              <span className='orderSummary__date'>{state.time}</span>
            </div>
          </div>
          <button
            className='orderSummary__changeDateButton'
            onClick={changeDateHandler}
          >
            Change date
          </button>
        </div>
        <div className='orderSummary__orderEdit'>
          <span className='orderSummary__title'>
            <ShoppingCartOutlinedIcon className='orderSummary__icon' />
            Your order
          </span>
          <span className='orderSummary__editButton' onClick={orderEditHandler}>
            Edit order
          </span>
        </div>
        <div className='orderSummary__reservationInfo'>
          <div className='orderSummary__reservationInfoItem'>
            <span className='text'>
              <BorderOuterOutlinedIcon className='orderSummary__icon' />
              Table reservation - Main Stage
            </span>
          </div>
          <div className='orderSummary__reservationInfoItem'>
            <span className='text'>
              {' '}
              <PersonOutlineOutlinedIcon className='orderSummary__icon' />
              300PLN | Table 7-10 Persons
            </span>
          </div>
        </div>
        <span className='orderSummary__addSeatsButton'>
          <AddIcon className='orderSummary__icon' /> Add more seats
        </span>
        <form
          className='orderSummary__personalDataForm'
          onSubmit={submitHandler}
        >
          <div className='orderSummary__formItem'>
            <div className='orderSummary_formIconItem'>
              <PersonIcon className='orderSummary__formIcon' />
            </div>

            <input
              className='orderSummary__personalDataFormInput'
              placeholder='Name'
              value={personalData.name}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setPersonalData({
                  ...personalData,
                  name: e.currentTarget.value,
                })
              }
              type='text'
            />
          </div>

          <div className='orderSummary__formItem'>
            <div className='orderSummary_formIconItem'>
              <EmailIcon className='orderSummary__formIcon' />
            </div>

            <input
              className='orderSummary__personalDataFormInput'
              placeholder='Email address'
              value={personalData.emailAddress}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setPersonalData({
                  ...personalData,
                  emailAddress: e.currentTarget.value,
                })
              }
              type='text'
            />
          </div>
          <div className='orderSummary__formItem'>
            <div className='orderSummary_formIconItem'>
              <PhoneAndroidIcon className='orderSummary__formIcon' />
            </div>

            <input
              className='orderSummary__personalDataFormInput'
              placeholder='Phone number'
              value={personalData.phoneNumber}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setPersonalData({
                  ...personalData,
                  phoneNumber: e.currentTarget.value,
                })
              }
              type='text'
            />
          </div>
          <textarea
            className='orderSummary__personalDataFormTextArea'
            placeholder='Comment'
            value={comment}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setComment(e.currentTarget.value)
            }
          />
          <button className='orderSummary__personalDataFormButton'>
            <CheckIcon className='orderSummary__icon' />
            Confirm order
          </button>
        </form>
        <div className='orderSummary__termAccept'>
          <span className='termText'>
            {' '}
            By clicking Confirm order, you agree to our Terms. Learn how we
            collect, use and share your data in our Privacy Policy and how we
            use cookies.
          </span>
        </div>
      </div>
    </div>
  )
}
