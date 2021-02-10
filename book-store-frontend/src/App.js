import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useHistory, useLocation, useParams } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import MyNavBar from './Components/Navbar/Navbar';
import Books from './Components/Books/Books';
import UserLogin from './Components/UserLogin/UserLogin';
import Register from './Components/Register/Register'
import MyCart from './Components/MyCart/MyCart';
import Footer from './Components/Footer/Footer';
import RetailerMain from './Components/RetailerMain/RetailerMain';
import RetailerLogin from './Components/RetailerLogin/RetailerLogin';


import { Button } from 'react-bootstrap';
import { render } from '@testing-library/react';


function App() {

  const [ currentUser, setCurrentUser ] = useState(null);
  const history = useHistory();

  return(
    <div>
      <Router history={history}>
      <MyNavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Switch>
          <PrivateRoute exact path="/"> 
            <Books setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} />
          </PrivateRoute>
          <Route path='/books'> 
            <Books setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} />
          </Route>
          <Route path='/login'> 
            <UserLogin setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} /> 
          </Route>
          <Route path='/register'> 
            <Register setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} /> 
          </Route>
          <Route path='/retailer/login'>
            <RetailerLogin setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} />
          </Route>
          <Route path='/retailer/main'> 
            <RetailerMain setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} />
          </Route>
          <Route path='/mycart'>
            <MyCart setCurrentUser={setCurrentUser} currentUser={currentUser} history={history} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )

}

export default App;
