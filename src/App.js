import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Profile from './pages/profile';
import AuthContextProvider from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import NotfoundPage from './pages/NotfoundPage';



function App(props) {
  return (
    <>
      <div className="App">
        <AuthContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <ProtectedRoute component={Home} path='/' exact />
              <ProtectedRoute component={LogIn} path='/connexion' />
              <ProtectedRoute component={SignUp} path='/inscription' />
              <ProtectedRoute component={Profile} path='/profile' />
              <ProtectedRoute component={NotfoundPage} path='*' exact />
            </Switch>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </>
  )
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/connexion' ||
    path === '/inscription'
  ) {
    return currentUser ? (
      <Redirect to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/connexion',
        state: { from: path },
      }}
    />
  )
}

export default App;
