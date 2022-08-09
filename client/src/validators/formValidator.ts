import { PersonalData as PersonalDataType } from '../types/ReservationContextTypes'
import { hasNumber, onlyDigits, email } from './patterns'
import { invalidName, invalidEmail, invalidPhone } from './errorsMessages'

export const validate = (personaData: PersonalDataType) => {
  const { name, phoneNumber, emailAddress } = personaData

  if (name.trim().length < 2 || hasNumber.test(name)) {
    return { error: invalidName }
  }
  if (!onlyDigits.test(phoneNumber.trim()) || phoneNumber.trim().length < 9) {
    return { error: invalidPhone }
  }
  if (!email.test(emailAddress.trim())) {
    return { error: invalidEmail }
  }
  return { error: null }
}
