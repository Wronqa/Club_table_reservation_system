const fs = require('fs')

const query = {
  select: fs.readFileSync(__dirname + '/selectTables.sql', 'utf-8'),
}
console.log(__dirname)

module.exports = query
