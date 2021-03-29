import TimelineFilterPosts from '../TimelineFilterPosts/TimelineFilterPosts'
import styled from 'styled-components'
import TimelineLoggedInUser from '../../Components/TimelineLoggedInUser/TimelineLoggedInUser'
import TimelineNewPostDropdown from '../../Components/TimelineNewPostDropdown/TimelineNewPostDropdown'

const TimelineTopChatMenu = ({ currentUser }) => {
    return (
        <>
            <StyledTopMenu>
                <div className="container">
                    <TimelineLoggedInUser currentUser={ currentUser } />
                    <div className='right-menu'>
                        <TimelineFilterPosts/>
                    </div>
                </div>
                <TimelineNewPostDropdown currentUser={ currentUser }/>
            </StyledTopMenu>
        </>
    )
}

const StyledTopMenu = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom:2px solid white;

    .container {
        display:flex;
        flex-direction:column;
        width:100%;
        justify-content:space-between;
        align-items:center;
        padding:10px 0;
    }

    .right-menu {
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

export default TimelineTopChatMenu