import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

function Footer(props) {

    function RetailerLogin(props){
        props.useCurrentlyViewing('Retailer');
        console.log()
    }

    return(
        <Row>
            <Col xs={3} />
            <Col xs={6}>Copywright 2021©</Col>
            <Col xs={3}>
                <Button onClick={()=> RetailerLogin(props)}>Retailer Login</Button>
            </Col>
        </Row>
    )
}

export default Footer;