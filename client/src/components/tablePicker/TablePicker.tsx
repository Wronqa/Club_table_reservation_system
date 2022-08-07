import './tablePicker.css'
import { useContext, useEffect, useState } from 'react'
import ImageMapper, { AreaEvent, CustomArea } from 'react-img-mapper'
import { config } from '../../utils/tablePickerConfig'
import { ACTIONS } from '../../types/ReservationActionsTypes'
import { ReservationContext } from '../../context/ReservationContext'
import { Area as AreaType } from '../../types/TablePickerTypes'
import { getAllTablesCall } from '../../apiCalls/tablesCalls'

export const TablePicker = () => {
  const [tables, setTables] = useState<Object | null>(null)
  const [tableName, setTableName] = useState('')

  const { dispatch } = useContext(ReservationContext)

  const handleHover = (area: AreaType, index: number, event: AreaEvent) => {
    setTableName(area.title as string)
  }
  const handleClick = (area: CustomArea, index: number, event: AreaEvent) => {
    dispatch({ type: ACTIONS.setTable, payload: Number(area.id) })
  }

  useEffect(() => {
    let isMounted = true

    const loadTables = async () => {
      const res = await getAllTablesCall(dispatch)
      console.log(res)
    }
    loadTables()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className='tablePicker'>
      <h1 className='tablePicker__title'>Please select the table</h1>

      <ImageMapper
        src={require('../../images/club.png')}
        map={config}
        width={650}
        height={350}
        onMouseEnter={handleHover}
        onClick={handleClick}
      />

      <div className='tablePicker__tableInfo'>
        <span className='tablePicker__tableName'>{tableName}</span>
      </div>
    </div>
  )
}
