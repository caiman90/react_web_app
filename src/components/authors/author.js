/**
 * Created by rejhan on 20.10.2017.
 */
"use strict";

var React = require('react');
var AuthorApi = require('../../api/auhtorApi');
var AuthorList = require('./authors');

var Author = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        if(this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },
    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = Author;