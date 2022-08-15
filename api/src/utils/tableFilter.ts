import { Table as TableType } from '../types/types'

const tableFilter = (
  allTables: Array<Array<TableType>>,
  takenTables: Array<Array<TableType>>
) => {
  const takenTablesArray = [...takenTables[0]].map((item) => item.id)

  return [...allTables[0]].map((table) => {
    if (takenTablesArray.includes(table.id))
      return { ...table, available: false }
    else {
      return { ...table, available: true }
    }
  })
}

module.exports = tableFilter
