import TimelineNavAreaNews from '../../Components/TimelineNavAreaNews/TimelineNavAreaNews'
import TimelineNavAreaChat from '../../Components/TimelineNavAreaChat/TimelineNavAreaChat'
import TimelineNavAreaLinks from '../../Components/TimelineNavAreaLinks/TimelineNavAreaLinks'
import styled from 'styled-components'

const TimelineNavArea = ({ currentUser }) => {
    return (
        <StyledNavArea>
            <TimelineNavAreaLinks />
            <TimelineNavAreaChat currentUser={ currentUser }/>
            <TimelineNavAreaNews />
        </StyledNavArea>
    )
}

const StyledNavArea = styled.div`
    display:flex;
    min-width:800px;
`

export default TimelineNavArea
