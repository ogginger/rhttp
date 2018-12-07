//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"file",
	"Snip"
], function(
	file,
	Snip
) {
	console.log("Main initialized successfully!");

	//*
        var xSnip = new Snip({
                "Dir": __dirname + "/Snippets/",
                "Snippets": {
                        "testsuite":"testsuite.txt",
                        "function":"function.txt",
			"test":"test.txt"
                }
        });

	xSnip.render({
		"TemplateType": "testsuite",
		"Options": {
			"Method": "function_name"
		},
		"FileName": "Project/test_suite.js"
	});
	//*/
});
