import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MyCart(props){

    const [ userCart, setUserCart ] = useState(null);
    const [ cartTotal, setCartTotal ] = useState(0.00);


    useEffect(() => {
        if(props.currentUser){
            
            const id = props.currentUser.id;

            axios.get('http://localhost:5000/api/users/:id', id)
            .then(res=>{
                setUserCart(res.data.cart);
            });
        }
    });

    return(
        <h1>MY CART!</h1>
    )
}

export default MyCart;