import axios from 'axios';
import config from 'config';
import { authHeader } from "../_helpers";

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
}

function login(email, password){

    const requestOptions = {
        url: 'http://localhost:5000/api/users/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    }

    axios(requestOptions)
    .then(handleResponse)
    .then(user =>{
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    });
}

function logout(){
    //removes user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll(){

    const requestOptions = {
        url: 'http://localhost:5000/api/users/login',
        method: 'GET',
        headers: authHeader()

    }

    axios(requestOptions).then(handleResponse);
}

function register(userData){

    const requestOptions = {
        url: `http://localhost:5000/api/users/register`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)

    }

    axios(requestOptions).then(handleResponse);
}

function getById(id){
    const requestOptions = {
        url: `http://localhost:5000/api/users/${id}`,
        method: 'GET',
        headers: authHeader()
    }

    axios.get(requestOptions).then(handleResponse);
}

function update(user){
    const requestOptions = {
        url: `http://localhost:5000/api/users/${user.id}`,
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    axios(requestOptions);
}

function _delete(id){
    const requestOptions = {
        url: `http://localhost:5000/api/users/${id}`,
        method: 'DELETE',
        headers: authHeader()
    }

    axios(requestOptions).then(handleResponse);

}

function handleResponse(response){
    return response.text().then(text =>{
        const data = text && JSON.parse(text);
        if(!response.ok){
            if(response.status = 401){
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(eror);
        }

        return data;
    });
}