import express from "express"
import upload from "../middleware/multer"

const router = express.Router()

router.route("/upload").post(upload.single("file"), (req, res) => {
  req.file ? res.send({ success: true }) : res.send({ success: false })
})

export default router
