import express from "express"
import userRoutes from "./routers/User"
import courseRoutes from "./routers/Course"
import connect from "./db/mongoose"
import morgan from "morgan"
import cors from "cors"

const app = express()

connect()
app.use(cors())
app.use(express.json())

app.use(morgan("dev"))

app.use(userRoutes)
app.use(courseRoutes)

app.listen(3001, () => {
  console.log("Server up on port 3001")
})
