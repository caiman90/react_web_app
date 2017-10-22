/**
 * Created by rejhan on 21.10.2017.
 */

"use strict";

var React = require('react');
var AuthorApi = require('../../api/auhtorApi');

var Authors = React.createClass({
    render: function () {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}> {author.id} </a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );

        };
        return (
            <div>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;