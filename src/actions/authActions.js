/**
 * Created by rejhan on 30.10.2017.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var AuthActions = {
    createUser: function (user) {
        // later will implement service call
        var userDto = {username: 'Rejhan', password: '12354',id: 3};

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_USER,
            userDto: userDto
        });
    },
    login: function(user){
        
    },
    logout: function (user) {
        
    },
    loggedIn: function (user) {
        
    }
};
module.exports= AuthActions;