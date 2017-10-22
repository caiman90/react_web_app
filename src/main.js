/**
 * Created by rejhan on 18.10.2017.
 */
/*eslint-disable strict*/ // disabling check becasue of Jquery global which is actaully needed for bootstrap

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
$ = jQuery = require('jquery');

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});