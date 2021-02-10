import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation, Redirect, withRouter } from 'react-router-dom';
import useForm from '../UseForm/UseForm';
import axios from 'axios';


  function Registration(props){


    const  register = (e) => {

        const url = "http://localhost:5000/api/users/register"

        const newUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            password2: values.password2
        }

        console.log("newUser: ", newUser);

        axios.post(url, newUser)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
        
        props.history.push('/login');

    }

    const { values, handleSubmit, handleChange } = useForm(register);

    return(

        <Row>

            <Col xs={3}/>
            
            <Col xs={6} >
                <br/>
                <Row>
                    <h1 className="header-text">Welcome! Please login or sign up!</h1>
                </Row>

                
                    <Col/>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="text" name="firstName" placeholder="First Name" required={true} value={values.firstName} onChange={handleChange} />
                            <Form.Control type="text" name="lastName" placeholder="Last Name" required={true} value={values.lastName} onChange={handleChange} />
                            <Form.Control type="email" name="email" placeholder="Email" required={true} value={values.email} onChange={handleChange} />
                            <FormControl type="password" name="password" placeholder="Password 8-32 Characters" className = "mr-sm-2" value={values.password} onChange={handleChange} />
                            <Form.Control type="password" name="password2" placeholder="Confirm Password" required={true} value={values.password2} onChange={handleChange} />
                            <Button type="submit" variant="info">Register</Button>
                            <Link to='/login' className="btn btn-link">Login</Link>
                        </Form>
                    <Col/>
                

            </Col>

            <Col xs={3} />

        </Row>




    )
}

export default withRouter(Registration);
