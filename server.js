var express = require('express')
var path = require('path')

var app = express()
app.use(express.static('styleguide'))

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'styleguide', 'index.html'))
})

app.listen(6060, function () {
  console.log('Cat-UI Listening on 6060!')
})
