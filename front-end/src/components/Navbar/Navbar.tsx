import './Navbar.scss'
import {Link} from 'react-router-dom'
import Search from '@material-ui/icons/Search'
import {Navbar,Button,Form,FormControl,Nav} from 'react-bootstrap'

const NVBR = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand>Coursify</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"/>
            <Nav.Link href="#home">Categories</Nav.Link>
            <Nav.Link href="#link">User</Nav.Link>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
  </Navbar.Collapse>
        </Navbar>
    )
}

export default NVBR
