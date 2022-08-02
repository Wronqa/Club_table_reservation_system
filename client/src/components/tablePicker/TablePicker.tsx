import './tablePicker.css'
import { useState } from 'react'
import ImageMapper, { AreaEvent, CustomArea } from 'react-img-mapper'
import { config } from '../../utils/tablePickerConfig'

export const TablePicker = () => {
  const [tableName, setTableName] = useState('')

  const handleHover = (area: any, index: number, event: AreaEvent) => {
    setTableName(area.title)
  }
  return (
    <div className='tablePicker'>
      <h1 className='tablePicker__title'>Please select the table</h1>
      <ImageMapper
        src={require('../../images/club.png')}
        map={config}
        width={650}
        onMouseEnter={handleHover}
      />
      <div className='tablePicker__tableInfo'>
        <span className='tablePicker__tableName'>{tableName}</span>
        <button className='tablePicker__button'>Select</button>
      </div>
    </div>
  )
}
