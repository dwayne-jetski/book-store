import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import useForm from '../UseForm/UseForm';


  function DisplayRegistration(){

    const register = () =>{

        const user = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            password2: values.password2
        }

        console.log(user);

    }

    const { values, handleSubmit, handleChange } = useForm(register);

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" name="firstName" placeholder="First Name..." required="true" value={values.firstName} onChange={handleChange} />
            <Form.Control type="text" name="lastName" placeholder="Last Name..." required="true" value={values.lastName} onChange={handleChange} />
            <Form.Control type="email" name="email" placeholder="Email..." required="true" value={values.email} onChange={handleChange} />
            <FormControl type="password" name="password" placeholder="Password..." classNave = "mr-sm-2" value={values.password} onChange={handleChange} />
            <Form.Control type="password" name="password2" placeholder="confirm password" required="true" value={values.password2} onChange={handleChange} />
            <Button type="submit" variant="info">Login</Button>
        </Form>
    )
}

export default DisplayRegistration;