import { MapperConfig as MapperConfigType } from './../context/componentsTypes'

export const formatConfig = (config: Array<MapperConfigType>) => {
  const formattedConfig = config.map((item) => {
    return {
      ...item,
      coords: item.coords
        .toString()
        .trim()
        .split(',')
        .map((value) => Number(value)),
    }
  })
  return { name: 'table-map', areas: formattedConfig }
}
///Trzeba stworzyc obiekt typu format config
