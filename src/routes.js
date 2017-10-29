/**
 * Created by rejhan on 22.10.2017.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={ require('./components/app') }>
        <DefaultRoute handler={ require('./components/homepage') }/>
        <Route name="login" handler={ require('./components/login/loginPage') }/>
        <Route name="about" handler={ require('./components/about/aboutpage') }/>
        <NotFoundRoute handler={ require('./components/notFoundPage') }/>
    </Route>
);
module.exports = routes;