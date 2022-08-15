import { TableNameConstructor as TableNameConstructorType } from '../types/types'

const formatName = (obj: TableNameConstructorType) => {
  return `${obj.name}  |  ${obj.seats} Person  |  ${obj.price} PLN`
}

module.exports = formatName
