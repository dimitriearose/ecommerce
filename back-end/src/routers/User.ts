import express, { Response, NextFunction } from "express"
import User from "../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import authenticate from "../middleware/auth"
import dotenv from "dotenv"

const router = express.Router()
//up rashane
dotenv.config()

const secret = process.env.JWT as string

router.post("/", async (req, res: Response, next: NextFunction) => {
  try {
    const user = new User(req.body)

    if (!user) {
      return res.status(404).send({ message: " Bad Request" })
    }

    const token = jwt.sign({ id: user._id }, secret)

    await user.save()

    res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token,
    })
  } catch (error) {
    res.status(500).send({ message: "Server Error" })
  }
})

router.post("/login", async (req, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(400).send({ message: " Bad Request" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).send({ message: "Incorrect Credentials Entered" })
    }

    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "15m" })

    res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token,
    })
  } catch (error) {
    res.status(500).send({ message: "Server Error" })
  }
})

router.post(
  "/renewtoken",
  authenticate,
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const user = req.user

      const token = jwt.sign({ id: req.user._id }, secret)

      res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        token,
      })
    } catch (error) {
      res.status(500).send({ message: "Server Error" })
    }
  }
)

router.get("/:id", async (req, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(418).send({ message: " Bad Request" })
    }

    res.send({
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    })
  } catch (error) {
    res.status(500).send({ message: "Server Error" })
  }
})

router.get(
  "/",
  authenticate,
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.user._id)

      if (!user) {
        return res.status(418).send({ message: " Bad Request" })
      }

      res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      })
    } catch (error) {
      res.status(500).send({ message: "Server Error" })
    }
  }
)

router.delete(
  "/",
  authenticate,
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const user = req.user

      if (!user) {
        return res.status(418).send({ message: " Bad Request" })
      }

      await user.remove()

      res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      })
    } catch (error) {
      res.status(500).send({ message: "Server Error" })
    }
  }
)

export default router
