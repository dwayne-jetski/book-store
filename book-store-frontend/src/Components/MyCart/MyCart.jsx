import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Form, Col, FormControl, Button, DropdownButton, Dropdown, FormCheck, Image } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import StripeKey from '../StripeKey';
import { toast } from 'react-toastify';
import './MyCart.css';

toast.configure();

function MyCart(props){

    const [ userCart, setUserCart ] = useState(null);
    const [ orderComplete, setOrderComplete ] = useState(false);
    const [ orderTotal, setOrderTotal ] = useState(0.00);
    const [ itemRemoved, setItemRemoved ] = useState(false);
    const [ userAddress, setUserAddress ] = useState();
    const [values, setValues] = useState({});

    const [ products, setProducts ] = useState({});


    useEffect(() => {
        setUserCart([]);
        setOrderTotal(0.00);
        
        if( props.currentUser !== null && orderComplete === false ){
            const id = props.currentUser._id;
            axios.get('http://localhost:5000/api/users/'+id, )
            .then(res=>{
                
                if(res.data.cart !== undefined && res.data.cart !== null ){
                    setUserCart(res.data.cart);
                    let total = res.data.cart.reduce((totalPrice, book) => totalPrice + book.price, 0)
                    total = (parseFloat(total).toFixed(2))
                    
                    setOrderTotal(total);
                    
                    const names = res.data.cart.map((data, index) => {
                        console.log(data.title)
                        return {
                            title: data.title,
                            
                        }
                    });
                    setProducts({
                        name: names,
                        price: total
                    })
                }
            });
        }

        
        setOrderComplete(false);

    }, [orderComplete]);

    const handleChange = (event) =>{
        
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
        
    }

    const handleSubmit = (event) =>{

        event.preventDefault();
        console.log(values);
        
    }


    const DisplayCartItems = () => {

        if(userCart !== null){
        

            return userCart.map((data, index) => {
                const { authors, binding, datePublished, dimensions, edition, image, inventory, isbn, isbn13, language, msrp, pages, price, publisher, storeId, subjects, synopsis, title, titleLong, _id } = data;

                return(
                    <div className="cart_item" >
                        <Row>
                            <Col>
                                <Image className="image_style" src={image} thumbnail />
                            </Col>
                            <Col>
                                <br/>
                                <h4>Title: {title}</h4> 
                                <br/>
                                <h5>Author: {authors}</h5>
                                <br/>
                                <h5>Price: {price}</h5>
                                <br/>
                            <Button variant="danger">Remove</Button>
                            </Col>
                        </Row>
                    </div>
                )
            })
        }
    }


    async function handleToken(token, addresses) {
        console.log({token, addresses});
        const response = await axios.post('http://localhost:5000/api/users/checkout', {
            token, products
        });

        console.log("Stripe Response: ", response);
        const { status } = response.data;
        if(status === 'success'){
            toast('Success! Check email for details', { type: 'success'})
        } else {
            toast('Something went wrong', {
                type: 'error'
            })
        }

        const url="http://localhost:5000/api/"
        const userId = props.currentUser._id
        const storeId = "6029940125a06f32685e8649";
        const cart = userCart;
        const total = orderTotal;

        await axios.put(url+'users/orders/neworder/'+userId, cart).then(res => {
            console.log(res.data);
            
        });

        await axios.put(url+'users/cart/emptycart/'+userId).then(res=>{
            console.log(res);
            setOrderComplete(true)
            setOrderTotal(0.00)
            setUserCart([])
        });

        const order = {
            addresses: addresses,
            books: cart,
            total: total,
            contact: {
                email: props.currentUser.email,
                firstName: props.currentUser.firstName,
                lastName: props.currentUser.lastName
            }
        }

        console.log("Order: ", order)

        await axios.put(url+'store/neworder/'+storeId, order).then(res => {
            console.log("Successful Order: ", res)
        }).catch(err=> console.log(err));
    
        
    }

    const CartDisplay = () =>{

        function displayCheckout(){
            return(
                <React.Fragment>
                    <Row>
                        <Col xs={2}/>
                        <Col xs={4}>
                            <h1>Cart Total: ${orderTotal}</h1>
                            <br/>
                            <h1>Cart Items: </h1>
                            <br/>
                        </Col>
                        <Col xs={1} />
                        <Col xs={4}>
                            {orderTotal < .01 ? <div></div> : <StripeCheckout 
                                stripeKey = {StripeKey.publishableKey}
                                token = {handleToken}
                                billingAddress
                                shippingAddress
                                amount={products.orderTotal * 100}
                                />}
                        </Col>
                        <Col xs={2}/>
                    </Row>
                    <Row>
                        <Col/>
                        <Col>
                        {DisplayCartItems()}
                        </Col>
                        <Col/>
                    </Row>
                </React.Fragment>
            )
        }

        function displayOrderCompleted(){
            return(
                <h1>Thank you for your order, {props.currentUser.firstName} {props.currentUser.lastName} </h1>
            )
        }


        return(
            <React.Fragment>
                    {orderComplete === true ? displayOrderCompleted() : displayCheckout()}
            </React.Fragment>
        )
    }

    
    
    
    return(
        <React.Fragment>
                <Row/>
                <Row>
                    <Col xs={3}/>
                        {(props.currentUser === null) ? <h1>Guest's Cart:</h1> :<h1> {props.currentUser.firstName + " " + props.currentUser.lastName }'s Cart:</h1>}
                </Row>
                
                {userCart === null ? <div>Loading...</div> : CartDisplay()}
        </React.Fragment>
    )
}

export default MyCart;