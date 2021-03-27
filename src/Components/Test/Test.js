// import {firestore, auth} from '../../Firebase/firebase_util'
// import {useEffect, useState} from 'react'

// const Test = ({ currentUser }) => {

//     const [tweetInfo, setTweetInfo] = useState({
//         uid: null,
//         email: null,
//         username: null,
//         likes: null
//     })

//     useEffect(() => {
//         const getEmail = async () => {
//             console.log("trying to get data...")
//             const getUser = await firestore.collection('users').doc('viwMCgtG2mDX2sgxHcOC')
//             console.log("success getting data...")
//             await getUser.set({
//                 uid: 'Booger pants',
//                 email: 'qweqweqwe',
//                 username: 'qeqweqwe@aol.com',
//                 likes: 300
//             })
//             console.log('Success writing data...')
//             console.log('Now getting the user...')
//             const getNewUser = await getUser.get()
//             setTweetInfo({
//                 tweetInfo,
//                 uid: getNewUser.data().uid,
//                 email: getNewUser.data().email,
//                 username: getNewUser.data().username,
//                 likes: getNewUser.data().likes
//             })
//         }

//         getEmail()
//     }, [])

//     const { uid, email, username, likes } = tweetInfo

//     return (
//         <div>
//             <p>{ uid }</p>
//             <p>{email ? email : "Loading..."}</p>
//             <p>{username ? username : null}</p>
//             <p>{likes ? likes : null}</p>
//         </div>    
//     )
// }

// export default Test