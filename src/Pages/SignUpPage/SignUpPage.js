import SignUp from '../../Components/SignUp/SignUp'
import { useHistory, Redirect } from 'react-router-dom'

const SignUpPage = ({ currentUser }) => {
    const history = useHistory()
    console.log(currentUser)

    const routeLocation = () => {
        if (currentUser.email) {
            history.push('/timeline')
        } else {
            <Redirect to='/signup' />
        }
    }

    // call functions
    routeLocation()

    return (
        <div className="signup-page">       
            <SignUp />
        </div>
    )
}

export default SignUpPage