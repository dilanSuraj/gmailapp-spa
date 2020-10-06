import React from 'react';

class Auth{

    login = (token) => {
        window.localStorage.setItem("gmailtoken", JSON.stringify(token));
    }

    logout = (callback) => {
        window.localStorage.setItem("gmailtoken", null);
        callback();
    }

    checkAuthenticated = () => {
        let token = JSON.stringify(window.localStorage.getItem("gmailtoken"));
        if(token.length > 10){
            return true;
        }
        return false;
    }

}

export default new Auth();
