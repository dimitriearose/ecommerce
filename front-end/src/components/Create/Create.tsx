import "./Create.scss"
import Navbar from "../Navbar/Navbar"
import { Helmet } from "react-helmet"
import { Form, Button } from "react-bootstrap"

const Create = () => {
  return (
    <div className='create'>
      <Helmet>
        <title>Courseify - Upload Course</title>
      </Helmet>
      <Navbar />
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Original price</Form.Label>
          <Form.Control type='number' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='o'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='number' placeholder='Original Price' />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Category</Form.Label>
          <Form.Control as='select'>
            <option value='beauty'>Beauty</option>
            <option value='programming'>Programming</option>
            <option value='music'>Music</option>
            <option value='other'>other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.File id='exampleFormControlFile1' label='Example file input' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Create
