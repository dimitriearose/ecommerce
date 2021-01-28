import mongoose, { Document } from "mongoose"
import bcrypt from "bcryptjs"
import validator from "validator"

interface Course extends Document {
  name: string
  creator: string
  img: Buffer
  category: string
  originalprice: number
  price: number
  details: string
  fineprint: string
}

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["music", "beauty", "programming", "other"],
      required: true,
    },
    originalprice: {
      type: Number,
      required: true,
    },
    fineprint: {
      type: String,
      required: true,
      default:
        "You have 30 days to return this product, if you are not satisfied.",
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  { timestamps: true }
)

const Course = mongoose.model<Course>("Course", courseSchema)

export default Course
