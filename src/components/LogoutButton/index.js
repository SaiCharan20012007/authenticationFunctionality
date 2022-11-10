// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = () => {
  Cookies.remove('jwt_token')
}
