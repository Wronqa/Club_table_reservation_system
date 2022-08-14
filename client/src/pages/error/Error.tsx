import './error.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export const Error = () => {
  return (
    <div className='error'>
      <div className='error__wrapper'>
        <div className='error__body'>
          <ErrorOutlineIcon className='error__icon' />
          <h1 className='error__desc'>Page not found</h1>
        </div>
      </div>
    </div>
  )
}
