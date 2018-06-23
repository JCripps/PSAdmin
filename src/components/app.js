/*eslint-disable strict */ // Disabling check because we can't run srict mode - we need global vars

var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var Header = require('./common/header');
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        var Child;

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;