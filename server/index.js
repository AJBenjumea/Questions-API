const express = require('express')
const app = express()
const port = 3000

// const { Client } = require('pg')
// const client = new Client()
// client.connect()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))