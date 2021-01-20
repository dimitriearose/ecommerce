import jwt from 'jsonwebtoken'
import User from '../models/User'
import {Request,Response,NextFunction} from 'express'

const secret:any = 'ajfendjnjidwni' 

const auth = async (req:any,res:Response,next:NextFunction) => {
    const token:any = req.headers.authorization?.split(' ')[1]
    const decoded:any = jwt.verify(token, secret)


    const user = await User.findOne({_id:decoded.id})


    if (!user){
        throw new Error('User Not Found')
    }


    req.user = user

    next()
}


export default auth