/**
 * Created by rejhan on 29.10.2017.
 */
"use strict";

var React = require('react');
var LoginForm = require('./loginForm');
var Router = require('react-router');
var toastr = require('toastr');

var LoginPage = React.createClass({
    mixins: [
       Router.Navigation
    ],
    getInitialState: function () {
            return {
               user: {username: '', password: '', id: ''},
               errors: {}
            };
    },
    setUserState: function (event) {
         var field = event.target.name;
         var value = event.target.value;
         this.state.user[field] = value;
         return this.setState({user: this.state.user});
    },
    loginFormValid: function () {
        var loginFormValid = true;
        this.state.errors = {};

        if(this.state.user.username.length < 3){
            this.state.errors.username = 'Userame must be at least 3 characters';
            loginFormValid = false;
        }

        if(this.state.user.password.length < 5){
            this.state.errors.password = 'Password must be at least 5 characters';
            loginFormValid = false;
        }
        this.setState({errors: this.state.errors});
        return loginFormValid;
    },
    login: function (event) {
         event.preventDefault();
         // implement service call
         if(!this.loginFormValid()){
             return;
         }
         toastr.success("Logged in successfully");

         this.transitionTo('about');
    },
    render: function () {
        return (
            <div>
                <LoginForm user={this.state.user}
                           onChange={this.setUserState}
                           onSave={this.login}
                           errors={this.state.errors}
                />
            </div>
        );
    }

});

module.exports = LoginPage;