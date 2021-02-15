import React, { useState, useEffect } from 'react';
import { Button, Row, Form} from 'react-bootstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function EditBook(props){
    const [ values, setValues ] = useState({});


    
    
    

    useEffect(()=> {
        

        const url = 'http://localhost:5000/api/store/products/'+props.bookToEdit

        axios.get(url).then(res=> {
            console.log(res.data);
            setValues(res.data);
            props.setEditComplete(false);
        })
    }, [])


    const HandleChange = (event) =>{

        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value}));

    }

    const DeleteItem = (e) => {
        e.preventDefault();

        const id = e.target.id

        const url = "http://localhost:5000/api/store/products/delete/" + id;
        
        axios.delete(url).then(res=>{
            console.log(res.data)
            props.setEditComplete(values.title + ' WAS DELETED FROM INVENTORY');
        });
       
    }

    const handleSubmit = (event) =>{

        event.preventDefault();
        console.log(values);

        const id = values._id
        const url = "http://localhost:5000/api/store/products/update/" + id;
        console.log(id);
        console.log(url);

        const updatedBook = {
            authors: values.authors,
            binding: values.binding,
            datePublished: values.datePublished,
            dimensions: values.dimenstions,
            edition: values.edition,
            image: values.image,
            inventory: values.inventory,
            isbn: values.isbn,
            isbn13: values.isbn13,
            language: values.language,
            msrp: values.msrp,
            pages: values.pages,
            price: values.price,
            publisher: values.publisher,
            subjects: values.subjects,
            synopsis: values.synopsis,
            title: values.title,
            titleLong: values.titleLong,

        }

        axios.put(url, updatedBook).then(res=>{
            console.log(res.data)
            props.setEditComplete(values.title + ' WAS EDITED');
        });
        
    }

    const displayBook = () => {
        return(
            <React.Fragment>
                <Row>
                    {(!props.editComplete) ? <h3>Now Editing: {values.title}</h3>: <h3>{props.editComplete}</h3>}
                </Row>
                <Form onSubmit={handleSubmit}>
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
                        <Button type="delete" variant="danger" onClick={(e)=>DeleteItem(e)} id={values._id}>Delete Item</Button>
                    </Form>
            </React.Fragment>
        )
    }

    return(

        <React.Fragment>
            
            {(props.editComplete) ? <h3>{props.editComplete}</h3> : displayBook() }
            
                
          
        </React.Fragment>
    )

}

export default withRouter(EditBook);