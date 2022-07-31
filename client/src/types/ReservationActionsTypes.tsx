import { PersonalData as PersonalDataType } from './ReservationContextTypes'

enum ACTIONS {
  setDate = 'setDate',
  setTime = 'setTime',
  setTable = 'setTable',
  setPersonalData = 'setPersonalData',
}

export type ReservationActions = {
  setDate: (date: Date) => void
  setTime: (time: string) => void
  setTable: (tableId: number) => void
  setPersonalDate: (personalData: PersonalDataType) => void
}
