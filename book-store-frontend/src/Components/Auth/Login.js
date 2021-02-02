import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Login(){
    return(
        <Form>
            <Form.Control type="email" placeholder="Email..." ></Form.Control>
            <FormControl type="password" placeholder="Password..." classNave = "mr-sm-2" />
            <Button type="submit" variant="info">Login</Button>
        </Form>
    )
}

export default Login;