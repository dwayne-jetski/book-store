import React, { useState, useEffect } from 'react';
import MyNavBar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import Books from './Components/Books/Books';
import MyCart from './Components/MyCart/MyCart';
import { Button } from 'react-bootstrap';

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
      </div>
      )
  }

}

export default App;
