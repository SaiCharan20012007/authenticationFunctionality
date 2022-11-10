// Write your JS code here
import Cookies from 'js-cookie'

import './index.css'
import Header from '../Header'

const Home = props => {
  const {history} = props
  const LogoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <Header />
      <h1>Home Route</h1>
      <button type="button" onClick={LogoutButton}>
        Logout
      </button>
    </div>
  )
}

export default Home
