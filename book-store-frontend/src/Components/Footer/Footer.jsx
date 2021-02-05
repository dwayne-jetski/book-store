import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

function Footer(props) {

    return(
        <Row>
            <Col xs={5} />
            <Col xs={2}>Copywright 2021©</Col>
            <Col xs={5} />
            
        </Row>
    )
}

export default Footer;