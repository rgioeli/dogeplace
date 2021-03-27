import './CSS/App.scss'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, AddUserToDatabase } from './Firebase/firebase_util'
import Header from './Components/Header/Header'
import Test from './Components/Test/Test'
import TimelinePage from './Pages/TimelinePage/TimelinePage'

function App() {

  const [currentUser, setCurrentUser] = useState({
    email: '',
    displayName: '',
    uid: ''
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
    <Header currentUser={currentUser ? currentUser : null}/>
      <Switch>
        <Route exact path='/'>
          {currentUser ? <Redirect to='/timeline' /> : <LoginPage /> }
        </Route>
        <Route path='/signup'>
          { currentUser ? <Redirect to='/timeline' /> : <SignUpPage user={currentUser}/> }
        </Route>
        <Route path='/timeline'>
          { currentUser ? <TimelinePage user={currentUser} /> : <Redirect to='/' />}
        </Route>
        {/* <Route path='/test'>
          <Test currentUser={currentUser}/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
