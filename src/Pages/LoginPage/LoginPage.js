import Login from '../../Components/Login/Login'
import { useHistory, Redirect } from 'react-router-dom'

const LoginPage = ({ currentUser }) => {
    const history = useHistory()

    const routeLocation = () => {
        if (currentUser.email) {
            history.push('/timeline')
        } else {
            <Redirect to='/' />
        }
    }

    routeLocation()

    return (
        <div className="login-page">
            <Login />
        </div>
    )
}

export default LoginPage