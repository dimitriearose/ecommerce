import mongoose,{Document} from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'validator'

interface Course extends Document {
    name: string,
    creator: string,
    img: Buffer,
    category: string,
    originalprice: number,
    price: number,
    details: string,
    fineprint: string
}

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    img:{},
   
    
},{timestamps:true})



const Course = mongoose.model<Course>('User', courseSchema)

export default Course