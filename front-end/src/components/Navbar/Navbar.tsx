import React, { useContext } from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import Search from "@material-ui/icons/Search"
import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap"
import UserContext from "../../context/userContext"

const NVBR = () => {
  const { userState } = useContext(UserContext)

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <Link className='logo' to='/'>
          Coursify
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' />
        <Nav.Link>Courses</Nav.Link>
        <Nav.Link>
          {userState.user?.email ? (
            userState.user?.name
          ) : (
            <Link to='/signup'></Link>
          )}
        </Nav.Link>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NVBR
