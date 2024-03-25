const express = require('express')
const cors = require('cors')
const { Pool } = require ('pg')
const { query } = required('./helpers/db.js')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', todoRouter)

const port = process.env.PORT


app.listen(port)
