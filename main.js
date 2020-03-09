//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"code"
], function(
	code
) {
	console.log("Main initialized successfully!");

	code( __dirname );
});
