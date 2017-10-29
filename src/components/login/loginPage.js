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
               user: {username: '', password: '', id: ''}
            };
    },
    setUserState: function (event) {
         var field = event.target.name;
         var value = event.target.value;
         this.state.user[field] = value;
         return this.setState({user: this.state.user});
    },
    login: function (event) {
         event.preventDefault();
         // implement service call
         toastr.success("Logged in successfully");

         this.transitionTo('about');
    },
    render: function () {
        return (
            <div>
                <LoginForm user={this.state.user}
                           onChange={this.setUserState}
                           onSave={this.login}
                />
            </div>
        );
    }

});

module.exports = LoginPage;