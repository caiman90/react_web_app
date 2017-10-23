/**
 * Created by rejhan on 20.10.2017.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
   render: function () {
       return (
           <div className="jumbotron">
               <h1>Rejhan</h1>
               <p>Simple web app react & node</p>
               <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
           </div>

       );
   }
});

module.exports = Home;