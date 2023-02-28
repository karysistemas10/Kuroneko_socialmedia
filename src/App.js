import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Welcome from './components/pages/Welcome'
import Navbar from './components/Navbar'
import Cats from './components/pages/Cats'
import About from './components/pages/About'
import Cat from './components/pages/Cat'
import Feed from './components/pages/Feed'
import './App.css'
import jwt_decode from 'jwt-decode'
import NewCat from './components/pages/NewCat'
import Account from './components/pages/Account'

function App() {
  // the currently logged in user will be stored up here in state
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  // event handler to log the user out when needed
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }

  return (
    <Router>
      <header>
        <Navbar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>
      <br></br>
      <br></br>
      <br></br>

      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={<Welcome />}
          />

          <Route 
            path="/register"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          {/* conditionally render auth locked routes */}
          <Route 
            path="/profile"
            element={currentUser ? <Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Navigate to="/login" />}
          />

          <Route
            path="/cats"
            element={<Cats />}
          />

          <Route
           path="/about"
           element={<About />}
          />

          <Route
            path="/cats/id/:id"
            element={<Cat currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />

          <Route
            path='/feed'
            element={<Feed />}
          />

          <Route
            path='/cats/new'
            element={<NewCat currentUser={currentUser} />}
          />
          <Route
          path='/profile/account' element = {<Account currentUser={currentUser} handleLogout={handleLogout} setCurrentUser={setCurrentUser}/>}/>
        </Routes>
        <img className='sideCat leftCat' src= 'https://i.imgur.com/fGAzAtW.png' alt='black cat looking up' />
        <img className='sideCat rightCat' src= 'https://i.imgur.com/Tpl6G6b.png' alt='black cat looking up' />
        <img className='sideCat rightLongCat' src='https://i.imgur.com/nvUPSwj.png' alt='a long cat' />
        <img className='sideCat leftLongCat' src='https://i.imgur.com/PWQqz04.png' alt='a long cat' />
        <img className='sideCat leftTopCat' src='https://i.imgur.com/UYWkQb9.png' alt='a flying orange cat' />
        <img className='sideCat rightTopCat' src='https://i.imgur.com/IWZXtw8.png' alt='a flying orange cat' />        
      </div>
    </Router>
  );
}

export default App;
