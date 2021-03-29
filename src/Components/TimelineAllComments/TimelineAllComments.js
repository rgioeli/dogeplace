import { useEffect, useState } from 'react'
import { firestore } from '../../Firebase/firebase_util'
import TimelinePostTemplate from '../../Components/TimelinePostTemplate/TimelinePostTemplate'
import { v4 as uuidv4 } from 'uuid'

const TimelineAllComments = () => {
    const [postsList, setPostsList] = useState([])

    useEffect(() => {
        const pullAllPosts = async () => {
            const getPosts = await firestore.collection('posts').onSnapshot(snapShot => setPostsList(snapShot.docs.map(doc => doc.data())));
        }

        pullAllPosts()
    }, [])

    return (
        <div>
            {
                postsList.map(data => {
                    return <TimelinePostTemplate data={data} key={uuidv4()}/>
                })
            }
        </div>
    )
}

export default TimelineAllComments