const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Reeler fishing coming soon!')
})

app.listen(port, () => {
  console.log(`Currently fishing on port ${port}`)
})