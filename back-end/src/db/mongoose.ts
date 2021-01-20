import mongoose from 'mongoose'

const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/coursify',{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true})
}

export default connect