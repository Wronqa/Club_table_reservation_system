import { useContext, useEffect, useState } from 'react'
import ImageMapper, { AreaEvent } from 'react-img-mapper'
import { Area as AreaType } from '../../types/ComponentsTypes'
import { ACTIONS } from '../../types/ReservationActionsTypes'
import { ReservationContext } from '../../context/ReservationContext'
import { getAllTablesCall } from '../../apiCalls/tablesCalls'
import { formatConfig } from '../../utils/mapperConfigFormatter'

import './tablePicker.css'

export const TablePicker = () => {
  const [mapperConfig, setMapperConfig] = useState<any>(null)
  const [tableName, setTableName] = useState('')
  const [isLoading, setLoading] = useState<boolean>(true)

  const { state, dispatch } = useContext(ReservationContext)

  const handleHover = (area: AreaType, index: number, event: AreaEvent) => {
    let name = `${area.name}  |  ${area.seats} persons  |   ${area.price} PLN`
    if (!area.available) {
      name += ' - TAKEN'
    }
    setTableName(name as string)
  }

  const handleClick = (area: AreaType, index: number, event: AreaEvent) => {
    if (area.available) {
      dispatch({ type: ACTIONS.setTable, payload: Number(area.id) })
      localStorage.setItem(
        'tableName',
        `${area.name} | ${area.seats} PERSONS | ${area.price} PLN`
      )
    }
  }

  useEffect(() => {
    let isMounted = true

    const loadTables = async () => {
      const res = await getAllTablesCall(dispatch, state.date as Date)

      if (res) {
        const config = formatConfig(res.data)
        isMounted && setMapperConfig(config)
      }
    }
    loadTables()
    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    let isMounted = true
    isMounted && mapperConfig && setLoading(false)

    return () => {
      isMounted = false
    }
  }, [mapperConfig])

  return (
    <>
      {!isLoading && (
        <div className='tablePicker'>
          <h1 className='tablePicker__title'>Please select the table</h1>

          <ImageMapper
            src={require('../../images/club.png')}
            map={mapperConfig}
            width={650}
            height={350}
            onMouseEnter={handleHover}
            onClick={handleClick}
          />

          <div className='tablePicker__tableInfo'>
            <span
              style={
                tableName.includes('TAKEN')
                  ? { color: 'crimson' }
                  : { color: 'rgba(13, 202, 13, 0.822)' }
              }
              className='tablePicker__tableName'
            >
              {tableName}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
