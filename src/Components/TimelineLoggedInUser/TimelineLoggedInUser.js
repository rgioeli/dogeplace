import styled from 'styled-components'
import { auth } from '../../Firebase/firebase_util'
import Doge from '../../Images/doge-icon.png'




const TimelineLoggedInUser = ({ currentUser }) => {
    return (
        <StyledLoggedInInfo>
            <div className="container">
                <img src={Doge} alt=""/>
                <p>{currentUser.email}</p>
                <span onClick={()=> auth.signOut()}>Logout</span>
            </div>
        </StyledLoggedInInfo>
    )
}

const StyledLoggedInInfo = styled.div`
    .container {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;

        img {
            height:100px;
            border-radius:100%;
        }
        p {
            padding:5px;
            color:#fff;
        }

        span {
            :hover {
                cursor:pointer;
            }
        }
    }
`

export default TimelineLoggedInUser