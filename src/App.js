import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Navbar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Connexion} path='/connexion' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
