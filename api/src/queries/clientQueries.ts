import { PersonalData as PersonalDataType } from '../types/types'

const clientQueries = {
  insert: (data: PersonalDataType) => {
    return `INSERT INTO "Client" (name,email,phone) VALUES('${data.name}','${data.emailAddress}','${data.phoneNumber}');  SELECT SCOPE_IDENTITY() AS id;`
  },
}

module.exports = clientQueries
