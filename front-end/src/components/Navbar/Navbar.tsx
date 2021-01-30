import React, { useContext } from "react"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import Search from "@material-ui/icons/Search"
import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap"
import UserContext from "../../context/userContext"

const NVBR = () => {
  const { userState, logout } = useContext(UserContext)

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
        {userState.user?.email && (
          <Nav.Link>
            <Link to='/create'>Upload Course</Link>
          </Nav.Link>
        )}
        <Nav.Link>
          {userState.user?.email ? (
            userState.user?.name
          ) : (
            <Link to='/signin'>Sign In</Link>
          )}
        </Nav.Link>
        {userState.user?.email && (
          <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
        )}
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NVBR
