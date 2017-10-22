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
               <h1>Rejhan Hrnjic</h1>
               <p> I am young developer eager to learn </p>
               <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
           </div>

       );
   }
});

module.exports = Home;