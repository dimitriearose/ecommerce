import auth from '../middleware/auth'
import express from 'express'
import Course from '../models/Course'

const router =  express.Router()

router.post('/course', auth,async (req:any,res,next) =>{
    try {
        const course = new Course({...req.body, creator:req.user._id})

        if (!course) {
            res.status(400).send("Invalid")
        }

        await course.save()

        res.send({course})
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router