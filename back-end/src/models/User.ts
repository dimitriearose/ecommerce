import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";
import Course from "./Course";
import validator from "validator";

interface User extends Document {
  name: string;
  email: string;
  password: string;
  avatar: Buffer;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: (email: string) => {
        if (!validator.isEmail(email)) {
          throw new Error("Email is not valid");
        }
      },
    },
    password: {
      type: String,
      minlength: 7,
      required: true,
      trim: true,
    },
    avatar: {
      type: Buffer,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre<User>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.pre<User>("remove", async function (next) {
  await Course.deleteMany({ creator: this._id });
  next();
});

const User = mongoose.model<User>("User", userSchema);

export default User;
