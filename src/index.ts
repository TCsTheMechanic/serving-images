import dotenv from "dotenv"
import app from "./app"

dotenv.config()

const port = process.env.API_PORT

app.listen(port, () => {
  console.log("Image server is Up!!")
  console.log(`Listening port ${port}!!`)
})
