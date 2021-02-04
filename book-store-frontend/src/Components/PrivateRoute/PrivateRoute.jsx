import React from 'react';
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute ({ component: Component, roles, ...rest}) {
    return(
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')){
                //not logged in so redirect to login page with return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;