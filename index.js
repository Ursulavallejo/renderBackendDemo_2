const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})
app.get('/', (_request, response) => {
  response.send({ hello: 'World' })
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
