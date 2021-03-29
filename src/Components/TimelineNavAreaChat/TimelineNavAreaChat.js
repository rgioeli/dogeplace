import styled from 'styled-components'
import TimelineTopChatMenu from '../../Components/TimelineTopChatMenu/TimelineTopChatMenu'
import TimelineAllComments from '../../Components/TimelineAllComments/TimelineAllComments'

const TimelineNavAreaChat = ({ currentUser }) => {
    return (
        <StyledChat>
            <TimelineTopChatMenu currentUser={ currentUser }/>
            <TimelineAllComments />
        </StyledChat>
    )
}

const StyledChat = styled.div`
    width:40%;
    padding:10px;
`

export default TimelineNavAreaChat