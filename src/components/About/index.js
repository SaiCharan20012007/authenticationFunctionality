// Write your JS code here
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const About = props => {
  const {history} = props
  const LogoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="about-container">
      <Header />
      <h1>About Route</h1>
      <button type="button" onClick={LogoutButton}>
        Logout
      </button>
    </div>
  )
}

export default About
