import React, { useState } from 'react';
import { Row, Col, Form, Button, FormControl } from 'react-bootstrap';
import AddBook from '../AddBook/AddBook';
import Inventory from '../Inventory/inventory';


function RetailerMain(){

    const [ displayAddBook, useDisplayAddBook ] =  useState(false);
    const [ displayInventory, useDisplayInventory ] = useState(false);


    function ToggleInventory(){
        useDisplayInventory(!displayInventory);
        useDisplayAddBook(false);
    }

    function ToggleAddBook(){
        useDisplayAddBook(!displayAddBook);
        useDisplayInventory(false);
        console.log(displayAddBook)
    }

    return(
        <React.Fragment>
            
            <Col></Col>
            
            <Col>
                <Row>
                    <Col>
                    <Button onClick={ToggleAddBook} >Add Book</Button>
                    </Col>
                    <Col>
                    <Button onClick={ToggleInventory} >View Inventory</Button>
                    </Col>
                    <Col>
                    <h1>See Your Sales Figures</h1>
                    {/* See Sales Function */}
                    </Col>
                    <Col>
                    <h1>See Book Requests</h1>
                    {/* Function for Book Requests */}
                    </Col>
                </Row>

                <Row>
                    <Col/>
                    <Col>
                        {!displayAddBook ? <div/> : <AddBook />}
                        {!displayInventory ? <div/> : <Inventory />}
                    </Col>
                    <Col />
                </Row>
            </Col>

            <Col></Col>

        </React.Fragment>
    )
}

export default RetailerMain;