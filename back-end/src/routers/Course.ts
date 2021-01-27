import authenticate from "../middleware/auth"
import express, { Response } from "express"
import Course from "../models/Course"
import sharp from "sharp"
import multer from "multer"
import dotenv from "dotenv"
import axios from "axios"
import formdata from "form-data"

dotenv.config()

const router = express.Router()

const upload = multer({
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true)
    } else {
      cb(null, false)
    }
  },
  limits: {
    fileSize: 1024 * 1024,
  },
})

router.post(
  "/course",
  upload.single("image"),
  authenticate,
  async (req: any, res) => {
    console.log(req)

    try {
      const user = req.user

      const { name, category, fineprint, originalprice, price } = req.body

      const image: Buffer = await sharp(req.file.buffer)
        .resize({ width: 600, height: 600 })
        .png({ quality: 80 })
        .toBuffer()

      const formFileData = new formdata()
      formFileData.append("image", image)

      const { data } = await axios.post(
        "https://api.imgbb.com/1/upload",
        formFileData
      )

      const course = new Course({
        name,
        category,
        fineprint,
        originalprice,
        price,
        creator: user._id,
      })

      if (!course) {
        return res.status(400).send("Invalid")
      }

      await course.save()

      res.send({ message: "Course Created 〽⚜⚜🔯🔯💟💗💜💥💥💦💦💯💯", course })
    } catch (error) {
      res.status(500).send(error)
    }
  }
)

router.post("/courses", async (req, res) => {
  try {
    const courses = await Course.find({}).limit(20)

    if (!courses) {
      return res.status(400).send("Invalid")
    }

    res.send(courses)
  } catch (error) {
    res.status(501).send(error)
  }
})

router.get("/course/:courseId", authenticate, async (req: any, res, next) => {
  const courseId = req.params.courseId

  try {
    const course = await Course.findById(courseId)

    if (!course) {
      return res.status(404).send("Invalid")
    }

    res.send({ course })
  } catch (error) {
    res.status(500).send(error)
  }
})

router.patch("/course/:courseId", authenticate, async (req, res) => {
  const { name, category, originalprice, price, details, fineprint } = req.body

  try {
    const courseId = req.params.courseId
    const course = await Course.findById(courseId)

    if (!course) {
      return res.status(400).send("Invalid")
    }

    course.name = name
    course.category = category
    course.originalprice = originalprice
    course.price = price
    course.details = details
    course.fineprint = fineprint

    await course.save()
    res.send(course)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete("/course/:courseId", authenticate, async (req, res) => {
  try {
    const courseId = req.params.courseId

    const course = await Course.findById(courseId)

    if (!course) {
      return res.status(400).send("Invalid")
    }

    await course.remove()

    res.send(course)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get("/course/search", authenticate, async (req, res) => {
  const searchParameter = String(req.query.search)
  const searchRegex = new RegExp(searchParameter)
  const page = Number(req.query.page) || 1
  const coursesPerPage = 20

  try {
    const courseId = req.params.courseId

    const courses = await Course.find({ name: { $regex: searchRegex } })
      .limit(coursesPerPage)
      .skip((page - 1) * coursesPerPage)

    const courseCount = await Course.find({ name: { $regex: searchRegex } })
      .limit(coursesPerPage)
      .skip((page - 1) * coursesPerPage)
      .countDocuments()

    if (!courses) {
      return res.status(400).send("Invalid")
    }

    res.send({
      courses,
      page,
      courseCount,
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router
