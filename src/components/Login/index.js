// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const {history} = props

  const saveCookies = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwt = data.jwt_token
    Cookies.set('jwt_token', jwt, {expires: 7})
    history.replace('/')
  }

  const jwtT = Cookies.get('jwt_token')
  if (jwtT !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1>Please Login</h1>
      <button type="button" onClick={saveCookies}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
