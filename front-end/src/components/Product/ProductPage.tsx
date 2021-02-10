import { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import UserContext from "../../context/userContext"
import { useParams, useHistory } from "react-router-dom"
import "./ProductPage.scss"
import Loader from "../Loader/Loader"
import Navbar from "../Navbar/Navbar"

const ProductPage = () => {
  const history = useHistory()

  const { fetchCourse, userState } = useContext(UserContext)

  const [course, setCourse] = useState<any>(null)

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fn = async () => {
      if (userState.user?.token) {
        const course = await fetchCourse(id, userState.user?.token)
        setCourse(course)
      } else {
        history.push("/signin")
      }
    }

    fn()
  }, [id, userState.user?.token, history])

  console.log(course)

  if (!course?.course) {
    return <Loader />
  }

  return (
    <div className='productpage'>
      <Helmet>
        <title>{course?.course.name}</title>
      </Helmet>

      <Navbar />

      <div className='container'>
        <div className='productpage__left'>
          <h1>{course?.course.name}</h1>
          <img src={course.course.img} alt='' />
          <p>{course.course.fineprint}</p>
          <p>{course.course.createdAt}</p>
          <p>{course.course.category}</p>
          <p>{course.course.originalprice}</p>
          <p>{course.course.price}</p>
          <p>{course.course.rating}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
