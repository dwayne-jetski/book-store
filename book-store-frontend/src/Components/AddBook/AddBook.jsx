import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';


function AddBook(){


    const [ values, setValues ] = useState({});

    const [ newBook, setNewBook ] = useState(null);

    const [ bookSubmission, setBookSubmission ] = useState(null);

    const HandleChange = (event) =>{

        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value}));
        console.log(values)
    }

    const handleSubmit = (event) =>{

        event.preventDefault();

        const url = "http://localhost:5000/api/store/newbook"

       

        setBookSubmission({
                isbn: values.isbn, 
                authors: values.authors,
                binding: values.binding,
                datePublished: values.date_published,
                dimensions: values.dimensions,
                edition: values.edition,
                image: values.image,
                isbn13: values.isbn13,
                language: values.language,
                msrp: values.msrp,
                pages: values.pages,
                datePublished: values.publish_date,
                publisher: values.publisher,
                title: values.title,
                titleLong: values.title_long,
                subjects: values.subjects,
                synopsis: values.synopsis,
                price: parseFloat(values.price),
                inventory: parseFloat(values.inventory),
                price: values.price,

        })

        console.log("newBook: ", bookSubmission);

        axios.post(url, bookSubmission).then(res =>{
                console.log(res.data)
                
            })
            
        
    }

    const GetBookDetails = () => {

        const headers = {
            "Content-Type": 'application/json',
            "Authorization": '45189_e1956007298eb5f4d7533e1d701ed6cb'
        }

        axios.get(`https://api2.isbndb.com/book/${values.isbn}`, {headers: headers})
        .then( res => {
            console.log(res.data);
            setNewBook(res.data.book);

            setValues({
                isbn: newBook.isbn, 
                authors: newBook.authors[0],
                binding: newBook.binding,
                datePublished: newBook.date_published,
                dimensions: newBook.dimensions,
                edition: newBook.edition,
                image: newBook.image,
                isbn13: newBook.isbn13,
                language: newBook.language,
                msrp: newBook.msrp,
                pages: newBook.pages,
                datePublished: newBook.publish_date,
                publisher: newBook.publisher,
                title: newBook.title,
                titleLong: newBook.title_long,
                subjects: newBook.subjects
    
            })
            console.log("newBook: ", newBook);
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    }



    return(

        <React.Fragment>
            <Row>
                <h3>Here you can add a book. Enter the ISBN and hit "Get Details?" to autopopulate based off the ISBN or ISBN13</h3>
            </Row>
            
                <Form onSubmit={handleSubmit}>
                    <Form.Control onChange={HandleChange} type="text" name="isbn" placeholder="ISBN" value={values.isbn} /> 
                    <Button onClick={()=> GetBookDetails()}>GET DETAILS?</Button>
                    <br/><br/>
                    <h5>Author: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="authors" placeholder="Author, separate by commas" value={values.authors} />
                    <h5>Binding: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="binding" placeholder="Binding" value={values.binding} />
                    <h5>Date Published: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="datePublished" placeholder="Date Published" value={values.datePublished} />
                    <h5>Dimensions: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="dimensions" placeholder="Dimensions" value={values.dimensions} />
                    <h5>Edition: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="edition" placeholder="Edition" value={values.edition} />
                    <h5>Image Link: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="image" placeholder="Image Source" value={values.image} required={true} />
                    <h5>ISBN13: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="isbn13" placeholder="ISBN 13" value={values.isbn13} />
                    <h5>Language: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="language" placeholder="Language" value={values.language} />
                    <h5>MSRP: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="msrp" placeholder="MSRP" value={values.msrp} />
                    <h5>Pages: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="pages" placeholder="Pages" value={values.pages} />
                    <h5>Publisher: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="publisher" placeholder="Publisher" value={values.publisher} />
                    <h5>Title: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="title" placeholder="Title" value={values.title} required={true} />
                    <h5>Title Long: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="titleLong" placeholder="Title Long" value={values.titleLong} />
                    <h5>Subjects/Genres: </h5>
                    <Form.Control onChange={HandleChange} type="text" name="subjects" placeholder="Subjects" value={values.subjects} required={true} />                    
                    <h5>Synopsis</h5>
                    <Form.Control onChange={HandleChange} type="text" name="synopsis" placeholder="Synopsis" value={values.synopsis} />
                    <h5>Price</h5>
                    <Form.Control onChange={HandleChange} type="text" name="price" placeholder="Price" value={values.price} required={true} />
                    <h5>Starting Inventory</h5>
                    <Form.Control onChange={HandleChange} type="text" name="inventory" placeholder="Your Inventory" value={values.inventory} required={true} />
                    <Button type="submit" variant="info">Submit</Button>
                </Form>
          
        </React.Fragment>
    )
}

export default AddBook;