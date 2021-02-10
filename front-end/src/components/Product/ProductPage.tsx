import { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import UserContext from "../../context/userContext"
import { useParams, useHistory } from "react-router-dom"
import "./ProductPage.scss"

const ProductPage = () => {
  const history = useHistory()

  const { fetchCourse, userState } = useContext(UserContext)

  const [course, setCourse] = useState<any>(null)

  const { id } = useParams<{ id: string }>()

  console.log(userState.user?.token)

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

  console.log(id)
  console.log(course)

  return (
    <div className='productpage'>
      <Helmet>
        <title>{course?.course.name}</title>
      </Helmet>
      <div className='productpage__left'>
        <h1>{course?.course.name}</h1>
        <img src={course?.course.img} alt='' />
      </div>
    </div>
  )
}

export default ProductPage
