"use strict";

var React = require('react');
var Input = require('../common/textInput');

var LoginForm = React.createClass({
    render: function() {
        return (
            <div className="login jumbotron center-block">
                <h1>Login</h1>
                <form role="form">
                    <Input name="username"
                           label="Username"
                           value={this.props.user.username}
                           onChange={this.props.onChange}
                           error={this.props.errors.username} />
                    <Input name="password"
                           label="Password"
                           value={this.props.user.password}
                           onChange={this.props.onChange}
                           error={this.props.errors.password} />

                    <input type="submit" value="Log in" className="btn btn-default" onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
});

module.exports = LoginForm;