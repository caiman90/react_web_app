/**
 * Created by rejhan on 30.10.2017.
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmmiter = require('events').EventEmitter;
var assign = require('object-assign'); // used for expamle to make one object from two objects and newly objects has properties of both objects
var CHANGE_EVENT = 'change';
// EventEmmiter.prototype similar like baseClass in java
var user = {};

var AuthStore = assign({},EventEmmiter.prototype,{
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener: function (callback) {
        this.on(CHANGE_EVENT,callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getAllUsers: function () {
         // implement
    },
    getUserById: function (id) {
        // implement
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType){
        case ActionTypes.CREATE_USER:
            user = action.user;
            AuthStore.emitChange();
    }
});

module.exports = AuthStore;