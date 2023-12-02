import express, { Application } from "express"
import { join } from "path"
import uploadRoute from "./routes/upload-route"

const app: Application = express()

app.use(express.static(join("./images")))

app.use("/upload", uploadRoute)

export default app
