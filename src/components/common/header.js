/**
 * Created by rejhan on 20.10.2017.
 */
"use strict";

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <a href="/" className="navbar-brand">
                      <img src="images/re.jpg" width={35}/>
                  </a>

                  <ul className="nav navbar-nav">
                      <li><a href="/">Home</a></li>
                      <li><a href="/#aboout">About</a></li>
                  </ul>
              </div>
          </nav>
        );
    }
});
module.exports = Header;