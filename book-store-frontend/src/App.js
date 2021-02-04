import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import MyNavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Books from './Components/Books/Books';
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

 /*  const [ currentlyViewing, useCurrentlyViewing ] = useState('Landing');

  function ChangeState(newState){

    useCurrentlyViewing(newState);
    console.log(newState);
  
  } */

  return(
    <div>
      <MyNavBar />
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Books} />
          <Route path='/login' component={Landing} />
        </Switch>
      </Router>
    </div>
  )

  /* if (currentlyViewing === 'Landing'){
    return (
      <div>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <Landing />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </div>
      )
  } else if (currentlyViewing === 'Books') {
      return (
      <div>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <Books />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </div>
      )
    }
    else if (currentlyViewing === 'MyCart') {
       return (
      <div>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <MyCart />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </div>
      )
  } else if (currentlyViewing === 'Retailer'){
    return(
      <Provider>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <RetailerMain />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </Provider>
    )
  } */

}

export default App;
