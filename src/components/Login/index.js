import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  }

  render() {
    const {isError, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-image-container">
          <img
            src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1677131725/bookhub/Rectangle_1467_1_hrsi3t.png"
            alt="login"
          />
        </div>
        <div className="login-form-container">
          <div className="form-wrapper">
            <div className="mobile-book-img-container">
              <img
                src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1677143530/Ellipse_99mobilelogin_hc5nnq.png"
                alt="book"
              />
            </div>
            <div className="login-logo-container">
              <img
                src="https://res.cloudinary.com/dgpzptsuh/image/upload/v1677131659/bookhub/Group_7730bookhublogo_xoafcf.png"
                alt="login logo"
                className="login logo"
              />
              <p className="login-name">ookHub</p>
            </div>
            <form className="login-form" autoComplete="off">
              <label htmlFor="username">Username*</label>
              <input type="text" id="username" placeholder="Username" />
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" placeholder="Password" />
              {isError ? <p className="error-msg">{errorMsg}</p> : null}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
