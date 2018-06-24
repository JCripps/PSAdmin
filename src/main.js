"use strict";

var React = require('react');
var Router = require("react-router");
var routes = require("./routes");

//Router.HistoryLocation - use this to get rid of the #
Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById("app"));
});