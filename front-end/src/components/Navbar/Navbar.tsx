import './Navbar.scss'
import {Link} from 'react-router-dom'
import Search from '@material-ui/icons/Search'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <h4 className='navbar__left__logo'>Coursify</h4>
            </div>
            <div className="navbar__middle">
                <form className='navbar__middle__form'>
                    <input type="text" placeholder="Search..."/>
                    <Search className='navbar__middle__search__icon' />
                </form>
            </div>
            <div className="navbar__right">
                <Link to='/'>Your Account</Link>
                <Link to='/'>Deals</Link>
                <Link to='/'>New Arrival</Link>
                <Link to='/'>Cart</Link>
           <button>Log Out</button>
            </div>
        </div>
    )
}

export default Navbar
