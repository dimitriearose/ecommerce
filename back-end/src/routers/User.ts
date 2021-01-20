import express,{Response,NextFunction} from 'express'
import User from '../models/User'
import jwt from 'jsonwebtoken'

const router =  express.Router()

router.post('/', async (req,res:Response,next:NextFunction) => {
    

    try {
        const user = new User(req.body)


        if (!user) {
            return res.status(418).send({message:' Bad Request'})
        }

        console.log(user)

        const token = jwt.sign({id:user._id},'ajfendjnjidwni')

        console.log(token)

        await user.save()
        
        res.send({id:user._id, name:user.name,email:user.email, avatar:user.avatar, token})
    } catch (error) {
        res.status(500).send({message:'Server Error'})
    }
})


export default router