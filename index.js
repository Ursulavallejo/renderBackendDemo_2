const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (_request, response) => {
  response.send({ hello: 'World' })
})

app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on http://localhost:${port}/`)
})
