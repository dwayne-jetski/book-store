import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, FormControl, Table } from 'react-bootstrap';
import axios from 'axios';

function EditBook(props){
    const [ values, setValues ] = useState({});

    const [ newBook, setNewBook ] = useState(null);

    const HandleChange = (event) =>{

        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value}));

    }

    const handleSubmit = (event) =>{

        event.preventDefault();

        
    }

    const GetBookDetails = () => {

      
    }

    return(
        <React.Fragment>
            <Row>
               {props.bookToEdit}
            </Row>
            
                <Form>
                    <h5>Authors: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="author" placeholder="Author" value={values.authors} required={true} />
                    <h5>Binding: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="binding" placeholder="Binding" value={values.binding} required={true} />
                    <h5>Date Published: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="datePublished" placeholder="Date Published" value={values.datePublished} required={true} />
                    <h5>Dimensions: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="dimensions" placeholder="Dimensions" value={values.dimensions} required={true} />
                    <h5>Edition: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="edition" placeholder="Edition" value={values.edition} required={true} />
                    <h5>Image Link: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="image" placeholder="Image Source" value={values.image} required={true} />
                    <h5>ISBN</h5>
                    <Form.Control onChange={HandleChange} type="text" name="isbn" placeholder="ISBN" value={values.isbn} required={true} /> 
                    <h5>ISBN13: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="isbn13" placeholder="ISBN 13" value={values.isbn13} required={true} />
                    <h5>Language: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="language" placeholder="Language" value={values.language} required={true} />
                    <h5>MSRP: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="msrp" placeholder="MSRP" value={values.msrp} required={true} />
                    <h5>Pages: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="pages" placeholder="Pages" value={values.pages} required={true} />
                    <h5>Publisher: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="publisher" placeholder="Publisher" value={values.publisher} required={true} />
                    <h5>Title: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="title" placeholder="Title" value={values.title} required={true} />
                    <h5>Title Long: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="titleLong" placeholder="Title Long" value={values.titleLong} required={true} />
                    <h5>Subjects/Genres: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="subjects" placeholder="Separate by a space: fiction drama etc." value={values.subjects} required={true} />                    
                    <h5>Synopsis</h5>
                    <Form.Control onChange={HandleChange} type="text" name="synopsis" placeholder="Synopsis" value={values.synopsis} required={true} />
                    <h5>Price</h5>
                    <Form.Control onChange={HandleChange} type="text" name="price" placeholder="Price" value={values.price} required={true} />
                    <h5>Starting Inventory</h5>
                    <Form.Control onChange={HandleChange} type="text" name="inventory" placeholder="Your Inventory" value={values.inventory} required={true} />
                    <Button type="submit" variant="info">Submit</Button>
                </Form>
          
        </React.Fragment>
    )

}

export default EditBook;