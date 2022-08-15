import { MapperConfig as MapperConfigType } from '../types/ComponentsTypes'

export const formatConfig = (config: Array<MapperConfigType>) => {
  const formattedConfig = config.map((item) => {
    return {
      ...item,
      fillColor: item.available
        ? 'rgba(15, 224, 15, 0.40)'
        : 'rgba(220, 20, 60, 0.616)',
      strokeColor: item.available
        ? 'rgba(15, 224, 15, 0.40)'
        : 'rgba(220, 20, 60, 0.616)',
      shape: 'rect',
      coords: item.coords
        .toString()
        .trim()
        .split(',')
        .map((value) => Number(value)),
    }
  })
  return { name: 'table-map', areas: formattedConfig }
}
