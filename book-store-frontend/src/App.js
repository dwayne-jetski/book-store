import React, { useState, useEffect } from 'react';
import MyNavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Books from './Components/Books/Books';
import MyCart from './Components/MyCart/MyCart';
import { Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';
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
      <Provider store={store}>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <Landing />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </Provider>
      )
  } else if (currentlyViewing === 'Books') {
      return (
      <Provider store={store}>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <Books />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </Provider>
      )
    }
    else if (currentlyViewing === 'MyCart') {
       return (
      <Provider store={store}>
        <MyNavBar/>
        <Button onClick={()=>ChangeState('MyCart')}> Change State: MyCart</Button>
        <Button onClick={()=>ChangeState('Books')}> Change State: books</Button>
        <Button onClick={()=>ChangeState('Landing')}> Change State: landing</Button>
        <MyCart />
        <Footer useCurrentlyViewing={useCurrentlyViewing} />
      </Provider>
      )
  } else if (currentlyViewing === 'Retailer'){
    return(
      <Provider store={store}>
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
