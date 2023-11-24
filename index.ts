import express, { Application } from "express"
import { join } from "path"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.API_PORT
const app: Application = express()

app.use(express.static(join("./images")))

app.listen(port, () => {
  console.log("Image server is Up!!")
  console.log(`Listening port ${port}!!`)
})
