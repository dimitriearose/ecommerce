import jwt from "jsonwebtoken"
import User from "../models/User"
import { Request, Response, NextFunction } from "express"
import dotenv from "dotenv"

dotenv.config()

const secret: any = process.env.JWT

const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token: any = req.headers.authorization?.split(" ")[1]
    const decoded: any = jwt.verify(token, secret)

    if (!token) {
      return res.status(400).send("no token")
    }

    const user = await User.findOne({ _id: decoded.id })

    if (!user) {
      throw new Error("User Not Found")
    }

    req.user = user
    req.token = token

    next()
  } catch (error) {
    res.status(500).send("Server Error")
  }
}

export default auth
