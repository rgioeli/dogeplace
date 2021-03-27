import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
    apiKey: "AIzaSyDo_9OYZllVFxiYBnLI1B6rjFphcJSjtTE",
    authDomain: "dogeplace-bad82.firebaseapp.com",
    projectId: "dogeplace-bad82",
    storageBucket: "dogeplace-bad82.appspot.com",
    messagingSenderId: "172693407576",
    appId: "1:172693407576:web:e7c64b876a8ca447b1472d",
    measurementId: "G-98CVR9YBNV"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUser = async (uid, email, username) => {
    console.log(uid)
    if (!uid) {
        console.log("There is not a UID")
        return;
    } else {
        console.log("There is a UID!")
    }
    const getRef = await firestore.collection('users').doc(`${uid}`);
    const snapShot = await getRef.get()
    if (!snapShot.exists) {
        console.log("It doesn't exist. Creating user now.")
        try {
            await getRef.set({
                uid,
                email,
                username
            })
            console.log("Created user successfully. Go ahead and have a look")
        } catch(err) {
            console.log(err)
        }
    }

}








const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


// ANY CALL TO A DATABASE ('CRUD' Created, Returning, Updating, Deleting) we must await the call
// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return // if user exists, user gets added from details below

//     //  making string for the snapshot
//     const userRef = firestore.doc(`users/${userAuth.uid}`) 

//     // actually getting reference to database
//     const snapShot = await userRef.get()

//     // checking if snapshot exists in database. 
//     // if snapshot doesn't exist, create user with userAuth information
//     if (!snapShot.exits) {
//         const { displayName, email } = userAuth
//         const createdAt = new Date()

//         try {
//             await userRef.set({
//                 displayName,
//                 email,
//                 createdAt,
//                 ...additionalData
//             })
//         } catch(err) {
//             console.log('error creating user', err.message)
//         }
//     }

//     return userRef
// }


// export const AddUserToDatabase = async (newUser, otherProps) => {
//     if (!newUser) return

//     const { username, email } = newUser

//     const queryRef = firestore.doc(`users/${newUser.uid}`)

//     const getRef = await queryRef.get()

//     if (!getRef.exists) {
//         await queryRef.set({
//             username,
//             email,
//             ...otherProps
//         })
//     }
    
//     return queryRef
// }