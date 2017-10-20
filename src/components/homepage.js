/**
 * Created by rejhan on 20.10.2017.
 */
"use strict";

var React = require('react');

var Home = React.createClass({
   render: function () {
       return (
           <div className="jumbotron">
               <h1>Rejhan Hrnjic</h1>
               <p> I am young developer eager to learn </p>
           </div>
       );
   }
});

module.exports = Home;