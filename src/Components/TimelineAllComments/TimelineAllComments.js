import { useEffect, useState } from 'react'
import { firestore } from '../../Firebase/firebase_util'
import TimelinePostTemplate from '../../Components/TimelinePostTemplate/TimelinePostTemplate'

const TimelineAllComments = () => {
    const [postsList, setPostsList] = useState([])

    useEffect(() => {
        const pullAllPosts = async () => {
            const getPosts = await firestore.collection('posts').onSnapshot(snapShot => setPostsList(snapShot.docs.map(doc => doc.data())));
        }

        pullAllPosts();
    }, [])

    return (
        <div>
            {
                postsList.map(data => {
                    return <TimelinePostTemplate data={data} key={data.post}/>
                })
            }
        </div>
    )
}

export default TimelineAllComments