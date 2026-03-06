require('dotenv').config()
const app = require("./src/app")
const connectToDb = require('./src/config/database')
const invoke = require('./src/services/ai.service')

connectToDb()


app.listen(3000 , () => {
    console.log("Server is running on port 3000")
})