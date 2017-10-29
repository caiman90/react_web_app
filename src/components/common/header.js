/**
 * Created by rejhan on 20.10.2017.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = React.createClass({
    render: function () {
        return (
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <a href="/" className="navbar-brand">
                      <img src="images/re.jpg" width={35}/>
                  </a>

                  <ul className="nav navbar-nav">
                      <li><Link to="app">Home</Link></li>
                      <li><Link to="about">About</Link></li>
                      <li><Link to="login">Login</Link></li>
                  </ul>
              </div>
          </nav>
        );
    }
});
module.exports = Header;