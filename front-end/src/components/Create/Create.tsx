import { useState, useContext } from "react"
import "./Create.scss"
import Navbar from "../Navbar/Navbar"
import { Helmet } from "react-helmet"
import { Form, Button } from "react-bootstrap"
import axios from "axios"
import userContext from "../../context/userContext"
import { useHistory } from "react-router-dom"

const Create = () => {
  const [name, setName] = useState("")
  const [originalPrice, setOriginalPrice] = useState("")
  const [price, setPrice] = useState("")
  const [fineprint, setFineprint] = useState("")
  const [category, setCategory] = useState("beauty")
  const [file, setFile] = useState<any>(null)

  const history = useHistory()

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const { createCourse, userState, createCourseState } = useContext(userContext)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      name.trim().length > 1 &&
      originalPrice.trim() &&
      file &&
      category &&
      fineprint &&
      price
    ) {
      const res = createCourse(
        { name, originalPrice, price, fineprint, category, file },
        userState.user.token
      )

      setTimeout(() => {
        if (res) {
          history.push("/")
        }
      }, 1000)
    }
  }

  return (
    <div className='create'>
      <Helmet>
        <title>Courseify - Upload Course</title>
      </Helmet>
      <Navbar />
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Course Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='number'>
          <Form.Label>Original price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Original Price'
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='originalPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='fineprint'>
          <Form.Label>Fineprint</Form.Label>
          <Form.Control
            type='text'
            placeholder='Fineprint'
            value={fineprint}
            onChange={(e) => setFineprint(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='select'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as='select'
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value='beauty'>Beauty</option>
            <option value='programming'>Programming</option>
            <option value='music'>Music</option>
            <option value='other'>other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.File
            id='file'
            label='Example file input'
            onChange={onFileUpload}
            accept='image/*'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Create
