import Timeline from '../../Components/Timeline/Timeline'
import { useHistory } from 'react-router-dom'

const TimelinePage = ({ currentUser }) => {
    const history = useHistory()

    // const routeLocation = () => {
    //     if (!currentUser.email) {
    //         history.push('/')
    //     }
    // }

    // routeLocation()

    return (
        <Timeline currentUser={ currentUser }/>
    )
}

export default TimelinePage