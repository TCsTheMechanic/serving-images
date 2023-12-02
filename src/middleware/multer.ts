import multer from "multer"
import { join } from "path"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join("./images"))
  },
})

const upload = multer({ storage: storage })

export default upload
