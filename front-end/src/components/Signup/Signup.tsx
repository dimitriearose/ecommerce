import React, { useState } from "react"
import validator from "validator"
import "./Signup.scss"
import { Form, Button, Jumbotron } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import axios from "axios"

var Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  var onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password.length >= 7 && validator.isEmail(email)) {
      // Submit
    }
  }

  return (
    <div className='signup'>
      <Navbar />

      <div className='signup__container'>
        <div className='signup__left'>
          <Jumbotron className='jumbotron' style={{ background: "#fff" }}>
            <h1>Coursify</h1>
            <p>Get Information you could find on youtube for $597.</p>
            <p>
              <Button variant='primary'>Learn more</Button>
            </p>
          </Jumbotron>
        </div>
        <div className='mx-auto flex-col signup__right'>
          <Form className='' style={{ maxWidth: "95%" }}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                Your Information is our information. Consider Your Email Sold.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Signup
