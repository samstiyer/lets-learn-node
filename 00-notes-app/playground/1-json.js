const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Sam"
data.age = 26

fs.writeFileSync('playground/1-json.json', JSON.stringify(data))