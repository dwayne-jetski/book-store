import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import SwitchRouterButtons from './Components/SwitchRouterButtons/SwitchRouterButtons'
import MyNavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Books from './Components/Books/Books';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import MyCart from './Components/MyCart/MyCart';
import Footer from './Components/Footer/Footer';
import RetailerMain from './Components/RetailerMain/RetailerMain';

import { Button } from 'react-bootstrap';


function App() {

  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(()=> {
    history.listen((location, action) => {
      //clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return(
    <div>
      <MyNavBar />
      <Router history={history}>
      <SwitchRouterButtons />
        <Switch>
          <PrivateRoute exact path="/" component={Books} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/retailermain' component={RetailerMain} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )

}

export default App;
