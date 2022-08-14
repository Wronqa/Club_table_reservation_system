const formatName = (obj: any) => {
  ///zmien
  const record = obj.recordset[0]
  return `${record.name}  |  ${record.seats} Person  |  ${record.price} PLN`
}

module.exports = formatName
