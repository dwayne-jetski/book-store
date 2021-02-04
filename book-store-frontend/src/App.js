import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyNavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Books from './Components/Books/Books';
import MyCart from './Components/MyCart/MyCart';
import { Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Footer from './Components/Footer/Footer';
import RetailerMain from './Components/RetailerMain/RetailerMain';


function App() {

  const [ currentlyViewing, useCurrentlyViewing ] = useState('Landing');

  function ChangeState(newState){

    useCurrentlyViewing(newState);
    console.log(newState);
  
  }

  if (currentlyViewing === 'Landing'){
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
  }

}

export default App;
