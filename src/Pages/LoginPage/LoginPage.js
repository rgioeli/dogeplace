import Login from '../../Components/Login/Login'
import { useHistory, Redirect } from 'react-router-dom'

const LoginPage = ({ currentUser }) => {
    const history = useHistory()

    const routeLocation = () => {
        
    }

    routeLocation()

    return (
        <div className="login-page">
            <Login />
        </div>
    )
}

export default LoginPage