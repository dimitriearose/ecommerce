import auth from '../middleware/auth'
import express,{Response} from 'express'
import Course from '../models/Course'

const router =  express.Router()

router.post('/course', auth,async (req:any,res,next) => {
    try {
        const course = new Course({...req.body, creator:req.user._id})

        if (!course) {
            res.status(400).send("Invalid")
        }

        await course.save()

        res.send({message:'Course Created' ,course})

    } catch (error) {
        res.status(500).send(error)
    }
})


router.get('/course/:courseId', auth, async (req:any,res,next) => {
    const courseId = req.params.courseId

    try {
        const course = await Course.findById(courseId)

        if (!course) {
           return res.status(404).send("Invalid")
        }

        res.send({course})

    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/course/:courseId', auth, async (req, res) => {
    const {name,category,originalprice,price,details,fineprint} = req.body
    
    try {
        const courseId = req.params.courseId
        const course = await Course.findById(courseId)

        if (!course) {
            return res.status(400).send("Invalid")
        }

        course.name = name
        course.category = category
        course.originalprice = originalprice
        course.price = price
        course.details = details
        course.fineprint = fineprint

        await course.save()
        res.send(course)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/course/:courseId', auth, async (req, res) => {
    
    try {
        const courseId = req.params.courseId

        const course = await Course.findById(courseId)

        if (!course) {
            return res.status(400).send("Invalid")
        }

        await course.remove()

        res.send(course)
    } catch (error) {
        res.status(500).send(error)
    }
})



export default router