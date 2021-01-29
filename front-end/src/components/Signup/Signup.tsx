import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import validator from "validator"
import "./Signup.scss"
import { Form, Button, Jumbotron } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import UserContext from "../../context/userContext"
import Loader from "../Loader/Loader"

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, signUpState } = useContext(UserContext)

  const history = useHistory()

  console.log(signUpState)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      password.trim().length >= 7 &&
      validator.isEmail(email) &&
      name.trim().length > 1
    ) {
      const res = signup({ name, email, password })

      setName("")
      setEmail("")
      setPassword("")

      setTimeout(() => {
        if (res) {
          history.push("/")
        }
      }, 5000)
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
          {signUpState?.loading && <Loader />}
          {signUpState?.error && <p>An Error Occured</p>}
          {signUpState?.success && <p>Successfully Signed Up</p>}

          <Form onSubmit={onSubmit}>
            <Form.Group controlId='formBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We will steal your data and add you to 500 email lists.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
