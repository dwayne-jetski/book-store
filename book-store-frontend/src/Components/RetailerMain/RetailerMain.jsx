import React from 'react';
import { Row, Col, Form, Button, FormControl } from 'react-bootstrap';


function RetailerMain(){

    return(
        <React.Fragment>
            
            <Col></Col>
            
            <Col>
                <Row>
                    <Col>
                    <h1>Add A Book</h1>
                    {/* Add Book Function */}
                    </Col>
                    <Col>
                    <h1>See Your Store's Inventory</h1>
                    {/* See Inventory Function */}
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
            </Col>

            <Col></Col>

        </React.Fragment>
    )
}

export default RetailerMain;