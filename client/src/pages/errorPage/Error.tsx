import './error.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export const Error = () => {
  return (
    <div className='error'>
      <div className='error__wrapper'>
        <ErrorOutlineIcon className='error__icon' />
        <h1 className='error__title'>Page not found</h1>
      </div>
    </div>
  )
}
