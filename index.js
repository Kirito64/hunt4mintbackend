const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
const db = require("./config/db")
db.sequelize.sync()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.get('/', (req, res) => res.send('Hello World!'))


const authRoutes = require('./routes/authRoutes')
app.use("/",authRoutes)
app.listen(port, () => console.log(`Authentication Service listening on port ${port}!`))