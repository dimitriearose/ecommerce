import express,{Response,NextFunction} from 'express'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router =  express.Router()

router.post('/', async (req,res:Response,next:NextFunction) => {
    

    try {
        const user = new User(req.body)


        if (!user) {
            return res.status(418).send({message:' Bad Request'})
        }

        const token = jwt.sign({id:user._id},'ajfendjnjidwni')

        await user.save()
        
        res.send({id:user._id, name:user.name,email:user.email, avatar:user.avatar, token})
    } catch (error) {
        res.status(500).send({message:'Server Error'})
    }
})

router.post('/login', async (req,res:Response,next:NextFunction) => {
    

    try {
        const {email,password } = req.body

        const user = await User.findOne({email:email})


        if (!user) {
            return res.status(400).send({message:' Bad Request'})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        
        if (!isMatch) {
            return res.status(400).send({message:'Incorrect Credentials Entered'})
        }
        
        const token = jwt.sign({id:user._id},'ajfendjnjidwni')
        
        res.send({id:user._id, name:user.name,email:user.email, avatar:user.avatar, token})
    } catch (error) {
        res.status(500).send({message:'Server Error'})
    }
})


router.get('/:id', async (req,res:Response,next:NextFunction) => {
    

    try {
        const user = await User.findById(req.params.id)


        if (!user) {
            return res.status(418).send({message:' Bad Request'})
        }

        
        
        res.send({id:user._id, name:user.name,email:user.email, avatar:user.avatar})
    } catch (error) {
        res.status(500).send({message:'Server Error'})
    }
})
 
//! Add Authenticate Middlware 💯💯💯💯💯💯💯

// router.get('/:id', async (req,res:Response,next:NextFunction) => {
    

//     try {
//         const user = await User.findById(req.params.id)


//         if (!user) {
//             return res.status(418).send({message:' Bad Request'})
//         }

        
        
//         res.send({id:user._id, name:user.name,email:user.email, avatar:user.avatar})
//     } catch (error) {
//         res.status(500).send({message:'Server Error'})
//     }
// })

export default router