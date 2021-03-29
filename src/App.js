import './CSS/App.scss'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { useEffect, useState } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { auth, AddUserToDatabase } from './Firebase/firebase_util'
import Header from './Components/Header/Header'
import Test from './Components/Test/Test'
import TimelinePage from './Pages/TimelinePage/TimelinePage'

function App() {

  console.log(useLocation())

  const [currentUser, setCurrentUser] = useState({
    email: null,
    displayName: null,
    uid: null
  })

  const [userStats, setUserStats] = useState({
    user: {}
  })

  useEffect(() => {
    const observeUser = async () => {
      await auth.onAuthStateChanged(user => {
        if (!user)  {
          setCurrentUser(false)
        } else {
          const {displayName, email, uid} = user
          setCurrentUser({
            ...currentUser,
            email,
            displayName,
            uid
          })
        }
      })
    }

    observeUser()
  }, [])

  return (
    <div className="App">
    {/* <Header currentUser={ currentUser }/> */}
      <Switch>
        <Route exact path='/'>
           <LoginPage currentUser={ currentUser } />
        </Route>
        <Route  path='/timeline'>
          <TimelinePage currentUser={ currentUser }/>
        </Route>
        <Route path='/signup'>
          <SignUpPage currentUser={ currentUser }/>
        </Route>
        {/* <Route path='/test'>
          <Test currentUser={currentUser}/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
