import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import useForm from '../UseForm/UseForm';

function DisplayLogin(){

    const login = () =>{

        const loginCridentials ={
            email: values.email,
            password: values.password,
        }

        console.log(loginCridentials);

    }

    const { values, handleChange, handleSubmit } = useForm(login);

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Control type="email" placeholder="Email..." onChange={handleChange} value={values.email} className = "mr-sm-2" ></Form.Control>
            <FormControl type="password" placeholder="Password..." onChange={handleChange} value={values.password} className = "mr-sm-2" />
            <Button type="submit" variant="info">Login</Button>
        </Form>
    )
}

export default DisplayLogin;