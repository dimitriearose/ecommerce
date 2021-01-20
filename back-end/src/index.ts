import express from 'express'
import userRoutes from './routers/User'
import connect from './db/mongoose'

const app = express()

connect()
app.use(express.json())

app.use(userRoutes)


app.listen(3001, () => {
    console.log('Server up on port 3001')
})