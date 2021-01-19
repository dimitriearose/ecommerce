import './Navbar.scss'
import {Link} from 'react-router-dom'
import Search from '@material-ui/icons/Search'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <h4>Pandora's Archive</h4>
            </div>
            <div className="navbar__middle">
                <form action="">
                    <input type="text" placeholder="Search..."/>
                    <Search />
                </form>
            </div>
            <div className="navbar__right">
                <Link to='/'>Your Account</Link>
                <Link to='/'>Deals</Link>
                <Link to='/'>New Arrival</Link>
           <button>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar
