import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import UseForm from '../UseForm/UseForm';


  function Register(){
    return(
        <Form>
            <Form.Control type="text" name="firstName" placeholder="First Name..." required="true" />
            <Form.Control type="text" name="lastName" placeholder="Last Name..." required="true" />
            <Form.Control type="email" name="email" placeholder="Email..." required="true" />
            <FormControl type="password" name="password" placeholder="Password..." classNave = "mr-sm-2" />
            <Form.Control type="text" name="password2" placeholder="confirm password" required="true" />
            <Button type="submit" variant="info">Login</Button>
        </Form>
    )
}

export default Register;