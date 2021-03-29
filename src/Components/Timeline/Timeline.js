import styled from 'styled-components'
import { ContainerStyled } from '../../CSS/GlobalStyled'
import { Link } from 'react-router-dom'
import { firestore } from '../../Firebase/firebase_util'
import { useEffect, useState } from 'react'
import TimelineTopChatMenu from '../TimelineTopChatMenu/TimelineTopChatMenu'
import TimelineNavArea from '../../Components/TimelineNavArea/TimelineNavArea'


const Timeline = ({ currentUser }) => {

    const [users, setUsers] = useState([])
    const [postsAll, setPostsAll] = useState([])

    useEffect(() => {
        const setUserComments = async () => {
            await firestore.collection('users').onSnapshot(snapshot => setUsers(snapshot.docs.map(doc => doc.data())));
        }
        
        setUserComments();
    }, [])

    

    return (
        <StyledTimeline>
            <TimelineNavArea currentUser={ currentUser } />
        </StyledTimeline>
    )
    
}

const StyledTimeline = styled.div`
    width:90vw;
    margin:0 auto;
    min-width:800px;
    min-height:50vh;
`

export default Timeline