import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Form, Col, FormControl, Button, DropdownButton, Dropdown, FormCheck, Image } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import StripeKey from '../StripeKey';
import StatesList from './StatesList';
import { toast } from 'react-toastify';
import './MyCart.css';

toast.configure();

function MyCart(props){

    const [ userCart, setUserCart ] = useState(null);
    const [ orderComplete, setOrderComplete ] = useState(false);
    const [ orderTotal, setOrderTotal ] = useState(0.00);
    const [ itemRemoved, setItemRemoved ] = useState(false);
    const [ billingSameAsShipping, setBillingSameAsShipping ] = useState(false);
    const [values, setValues] = useState({});

    const [ products, setProducts ] = useState({});


    useEffect(() => {

        if( props.currentUser !== null ){
            const id = props.currentUser._id;
            axios.get('http://localhost:5000/api/users/'+id, )
            .then(res=>{
                
                if(res.data.cart !== undefined && res.data.cart !== null ){
                    setUserCart(res.data.cart);
                    const total = res.data.cart.reduce((totalPrice, book) => totalPrice + book.price, 0)
                    console.log(total)
                    setOrderTotal(total);
                    console.log(res.data.cart);
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

        setBillingSameAsShipping(false);
        setOrderComplete(false);

    }, []);

    const handleChange = (event) =>{
        
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
        console.log(values)
    }

    const handleSubmit = (event) =>{

        event.preventDefault();
        console.log(values);
        
    }

    const CreditCardInfo = () =>{
        return(

                    
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange} required={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Last Name"  value={values.lastName} onChange={handleChange} required={true} />
                    </Form.Group>
                </Form.Row>
            

                <Form.Row>
                    <Form.Group as={Col} controlId="fromGridCreditCard">    
                        <Form.Label>Credit Card Number: </Form.Label>
                        <Form.Control type="text" name="creditCard" placeholer="Credit Card Number" value={values.creditCard} onChange={handleChange} required={true} />
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="fromGridCVV">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="text" name="cvv" placeholer="CVV" value={values.cvv} onChange={handleChange} required={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="fromGridMonth">
                        <Form.Label>Month</Form.Label>
                        <Form.Control as="select" name="month" value={values.month} onChange={handleChange} required={true} >
                            <option name="month" value="01">January</option>
                            <option name="month" value="02">February</option>
                            <option name="month" value="03">March</option>
                            <option name="month" value="04">April</option>
                            <option name="month" value="05">May</option>
                            <option name="month" value="06">June</option>
                            <option name="month" value="07">July</option>
                            <option name="month" value="08">August</option>
                            <option name="month" value="09">September</option>
                            <option name="month" value="10">October</option>
                            <option name="month" value="11">November</option>
                            <option name="month" value="12">December</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="fromGridYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control as="select" name="year" value={values.year} onChange={handleChange} required={true} >
                            <option name="year" value="21"> 2021</option>
                            <option name="year" value="22"> 2022</option>
                            <option name="year" value="23"> 2023</option>
                            <option name="year" value="24"> 2024</option>
                            <option name="year" value="25"> 2025</option>
                            <option name="year" value="26"> 2026</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
                    
                
        )
    }

    const ShippingAddressInfo = () =>{
        return(

            <Form>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" name="shippingAddress1" value={values.shippingAddress1} onChange={handleChange} required={true} />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" name="shippingAddress2" value={values.shippingAddress2} onChange={handleChange} required={true} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control  name="shippingCity" value={values.shippingCity} onChange={handleChange} required={true} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." name="shippingState" value={values.shippingState} onChange={handleChange} required={true} >
                        {StatesList()};
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control name="shippingZip" value={values.shippingZip} onChange={handleChange} required={true} />
                    </Form.Group>
                </Form.Row>
            </Form>
        )
    }

    const BillingAddressInfo = () => {


        return(
            <React.Fragment>

                <Button onClick={()=>setBillingSameAsShipping(!billingSameAsShipping)}>Same As Shipping Address?</Button>
                <br/><br/>

                <Form>

                    <Form.Group controlId="formGridAddress1"  >
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" name="billingAddress1" value={billingSameAsShipping === true ? values.shippingAddress1 : values.billingAddress1} onChange={handleChange} required={true} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" name="billingAddress2" value={billingSameAsShipping === true ? values.shippingAddress2 : values.billingAddress2} onChange={handleChange} required={true} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control  name="billingCity" value={billingSameAsShipping === true ? values.shippingCity : values.billingCity} onChange={handleChange} required={true} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..."  name="billingState" value={billingSameAsShipping === true ? values.shippingState : values.billingState} onChange={handleChange} required={true} >
                            {StatesList()};
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control  name="billingZip" value={billingSameAsShipping === true ? values.shippingZip : values.billingZip} onChange={handleChange} required={true} />
                        </Form.Group>
                    </Form.Row>
                </Form>
            </React.Fragment>
        )

    }

    const getCartTotal = () => {
        if(userCart !== null){
          const total = userCart.reduce((totalPrice, book) => totalPrice + book.price, 0)
          console.log(total)
          setOrderTotal(total);
          return total;
        }
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

        const { status } = response.data;
        if(status === 'success'){
            toast('Success! Check email for details', { type: 'success'})
        } else {
            toast('Something went wrong', {
                type: 'error'
            })
        }
    }

    const CartDisplay = () =>{

        return(
            <React.Fragment>
                <Row>
                    <Col xs={1}/>
                    <Col xs={4}>
                        <h1>Cart Total: ${orderTotal}</h1>
                        <br/>
                        <h1>Cart Items: </h1>
                        <br/>
                        {DisplayCartItems()}
                    </Col>
                    <Col xs={1} />
                    <Col xs={4}>
                        <h1>Credit Card Info: </h1>
                        {CreditCardInfo()}
                        <br/> <br/>
                        <h1>Shipping Address: </h1>
                        {ShippingAddressInfo()}
                        <br/> <br/>
                        <h1>Billing Address: </h1>
                        {BillingAddressInfo()}
                        <br/><br/>
                        <StripeCheckout 
                            stripeKey = {StripeKey.publishableKey}
                            token = {handleToken}
                            billingAddress
                            shippingAddress
                            amount={products.orderTotal * 100}
                        />
                    </Col>
                    <Col xs={1}/>
                </Row>
            </React.Fragment>
        )
    }

    
    
    
    return(
        <React.Fragment>
                <Row/>
                <Row>
                    <Button onClick={()=> console.log(products)}>CLICK ME!</Button>
                    <Col xs={4}/>
                        {(props.currentUser === null) ? <h1>Guest's Cart:</h1> :<h1> {props.currentUser.firstName + " " + props.currentUser.lastName }'s Cart:</h1>}
                </Row>
                
                {userCart === null ? <div>Loading...</div> : CartDisplay()}
        </React.Fragment>
    )
}

export default MyCart;