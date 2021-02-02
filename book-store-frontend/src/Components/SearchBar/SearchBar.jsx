import React from 'react';
import { Form, Col, FormControl, Button } from 'react-bootstrap';
import useForm from '../UseForm//UseForm';


function SearchBar(){


    const search = () => {

        const search = values.search;

        console.log(search);
    }


    const { values, handleChange, handleSubmit } = useForm(search);

    return(
        <Form inline onSubmint={handleSubmit}>
          <Col>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" name="search" onChange={handleChange} value={values.search} />
          </Col>
          <Col>
            <Button type="Submit" variant="outline-info">Search</Button>
          </Col>
        </Form>
    )
}

export default SearchBar;