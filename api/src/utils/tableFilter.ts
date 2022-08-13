import { TableType } from '../types/types'

const tableFilter = (
  allTables: Array<Array<TableType>>,
  takenTables: Array<Array<TableType>>
) => {
  const takenTablesArray = [...takenTables[0]].map((item) => item.id)

  // const freeTable =  [...allTables[0]].filter(
  //   (table) => !takenTablesArray.includes(table.id)
  // )

  return [...allTables[0]].map((table) => {
    if (takenTablesArray.includes(table.id))
      return { ...table, available: false }
    else {
      return { ...table, available: true }
    }
  })
}

module.exports = tableFilter
