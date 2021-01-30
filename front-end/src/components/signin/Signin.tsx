import React, { useState, useContext } from "react"
import { useHistory, Link } from "react-router-dom"
import validator from "validator"
import "./Signin.scss"
import { Form, Button, Jumbotron } from "react-bootstrap"
import Navbar from "../Navbar/Navbar"
import UserContext from "../../context/userContext"
import Loader from "../Loader/Loader"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signInState, signin } = useContext(UserContext)

  const history = useHistory()

  console.log(signInState)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validator.isEmail(email)) {
      const res = signin({ email, password })
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
            <p>New to Coursify?</p>
            <Link to='/signup'>Sign Up</Link>
          </Jumbotron>
        </div>
        <div className='mx-auto flex-col signup__right'>
          {signInState?.loading && <Loader />}
          {signInState?.error && <p>An Error Occured</p>}
          {signInState?.success && <p>Successfully Signed In</p>}

          <Form onSubmit={onSubmit}>
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
