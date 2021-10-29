import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Navbar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={LogIn} path='/connexion' />
          <Route component={SignUp} path='/inscription' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
