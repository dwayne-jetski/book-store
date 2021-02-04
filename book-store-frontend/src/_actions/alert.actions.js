import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
}

function success(message){
    return { type: alertConstants.SUCCESS, message };
}

function error(message){
    return { type: alertConstants.ERROR, message };
}

function error(){
    return { type: alertConstants.CLEAR };
}