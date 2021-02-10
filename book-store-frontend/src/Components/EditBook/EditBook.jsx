import React, { useState, useEffect } from 'react';
import { Button, Row, Form} from 'react-bootstrap';
import axios from 'axios';

function EditBook(props){
    const [ values, setValues ] = useState({});

    const [ newBook, setNewBook ] = useState(null);


    useEffect(()=> {
        
        const url = 'http://localhost:5000/api/store/products/'+props.bookToEdit

        axios.get(url).then(res=> {
            console.log(res.data);
            setValues(res.data);
        })
    }, [])


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
                <h1>Now Editing: {values.title}</h1>
            </Row>
            
                <Form>
                    <h5>Authors: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="authors" placeholder="Author" value={values.authors} required={true} />
                    <h5>Binding: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="binding" placeholder="Binding" value={values.binding}  />
                    <h5>Date Published: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="datePublished" placeholder="Date Published" value={values.datePublished}  />
                    <h5>Dimensions: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="dimensions" placeholder="Dimensions" value={values.dimensions}  />
                    <h5>Edition: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="edition" placeholder="Edition" value={values.edition}  />
                    <h5>Image Link: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="image" placeholder="Image Source" value={values.image} required={true} />
                    <h5>ISBN</h5>
                    <Form.Control onChange={HandleChange} type="text" name="isbn" placeholder="ISBN" value={values.isbn}  /> 
                    <h5>ISBN13: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="isbn13" placeholder="ISBN 13" value={values.isbn13}  />
                    <h5>Language: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="language" placeholder="Language" value={values.language}  />
                    <h5>MSRP: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="msrp" placeholder="MSRP" value={values.msrp}  />
                    <h5>Pages: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="pages" placeholder="Pages" value={values.pages}  />
                    <h5>Publisher: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="publisher" placeholder="Publisher" value={values.publisher} />
                    <h5>Title: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="title" placeholder="Title" value={values.title} required={true} />
                    <h5>Title Long: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="titleLong" placeholder="Title Long" value={values.titleLong}  />
                    <h5>Subjects: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="subjects" placeholder="Subject" value={values.subjects} required={true} />                    
                    <h5>Synopsis</h5>
                    <Form.Control onChange={HandleChange} type="text" name="synopsis" placeholder="Synopsis" value={values.synopsis}  />
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