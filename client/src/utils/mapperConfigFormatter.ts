export const formatConfig = (config: Array<Object>) => {
  const formattedConfig = config.map((item) => {
    return {
      ...item,
      coords: [...item.coords],
    }
  })
  console.log(formattedConfig)
}
///Trzeba stworzyc obiekt typu format config
