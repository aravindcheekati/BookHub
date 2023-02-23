import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
  <nav className="nav">
    <div className="nav-wrapper">
      <div className="nav-website-logo">
        <img
          src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1677131659/bookhub/Group_7730bookhublogo_xoafcf.png"
          alt="website logo"
        />
        <h1 className="website-title">ook Hub</h1>
      </div>
      <div className="nav-item-container">
        <ul className="nav-ul">
          <Link to="/" className="nav-link ">
            <li>Home</li>
          </Link>
          <Link to="/" className="nav-link ">
            <li>Bookshelves</li>
          </Link>
        </ul>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default NavBar
