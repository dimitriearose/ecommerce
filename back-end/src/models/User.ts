import mongoose,{Document} from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'validator'

interface User extends Document {
    name: string,
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim: true,
        lowercase:true,
        validate: (email:string) => {
            if (!validator.isEmail(email)){
                throw new Error('Email is not valid')
            }
        }
    },
    password:{
        type:String,
        minlength: 7,
        required: true,
        trim: true
    }
    
},{timestamps:true})

userSchema.pre<User>('save', async function (next) {
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password,100)
    }
    next()
})

const User = mongoose.model<User>('User', userSchema)

export default User