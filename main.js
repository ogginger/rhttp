//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	//"file_",
	//"Snip",
	//"test_rhttp",
	"rhttp!http://138.197.210.12/cdn/test"
], function(
	//file,
	//Snip,
	//test_rhttp,
	test
) {
	console.log("Main initialized successfully!");
	
	console.log( test );

	//new test_rhttp();
	
	/*
        var xSnip = new Snip({
                "Dir": __dirname + "/Snippets/",
                "Snippets": {
                        "testsuite":"testsuite.txt",
                        "function":"function.txt",
			"test":"test.txt"
                }
        });

	var sTestName = "rhttp_url_ResolvesDefine";

	xSnip.render({
		"TemplateType": "test",
		"Options": {
			"Name": sTestName,
			"Method": "rhttp"
		},
		"FileName": "rhttp/" + sTestName + ".js"
	});
	//*/
});
