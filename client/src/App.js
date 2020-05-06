import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import setAuthToken from './utils/setAuthToken'

import Alerts from './components/Alerts'

if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">


        <Alerts />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
