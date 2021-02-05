import React from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';


function SwitchRouterButtons(){

    return(
        <div>
            <Link to='/login' className="btn btn-link">Login</Link>
            <Link to='/register' className="btn btn-link">Register</Link>
            <Link to='/retailermain' className="btn btn-link">Retailer Main</Link>
            <Link to='/books' className="btn btn-link">Books </Link>
        </div>
    )
}

export default SwitchRouterButtons;