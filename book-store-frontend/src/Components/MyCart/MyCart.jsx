import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Form, Col, FormControl, Button } from 'react-bootstrap';

function MyCart(props){

    const [ userCart, setUserCart ] = useState(null);
    const [ cartTotal, setCartTotal ] = useState(0.00);


    useEffect(() => {
        if(props.currentUser !== null){
            
            const id = props.currentUser.id;

            axios.get('http://localhost:5000/api/users/:id', id)
            .then(res=>{
                setUserCart(res.data.cart);
            });
        }
    }, []);



    return(
        <React.Fragment>
            <Row/>
            <Row/>
            <Col xs={3}/>
            <Col xs={6}>



            </Col>
            <Col xs={3}/>
        </React.Fragment>
    )
}

export default MyCart;