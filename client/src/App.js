import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import setAuthToken from './utils/setAuthToken'

import Alerts from './components/Alerts'
import Contactus from './components/Contactus';
import Menu from './components/Menu'
import Reservation from './components/Reservation';
import Footer from './components/Footer';

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
          <Route exact path="/contact" component={Contactus} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/reservation" component={Reservation} />

        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
