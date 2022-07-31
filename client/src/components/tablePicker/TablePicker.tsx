import './tablePicker.css'
import { useState } from 'react'
import ImageMapper, { AreaEvent, CustomArea } from 'react-img-mapper'
import { config } from '../../utils/tablePickerConfig'

export const TablePicker = () => {
  const handleClick = (area: any, index: number, event: AreaEvent) => {
    console.log(area.title)
  }
  return (
    <div className='tablePicker'>
      <ImageMapper
        src={require('../../images/club.png')}
        map={config}
        width={270}
        onMouseEnter={handleClick}
      />
    </div>
  )
}
