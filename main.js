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

	/*
        var xSnip = new Snip({
                "Dir": __dirname + "/Snippets/",
                "Snippets": {
                        "testsuite":"testsuite.txt",
                        "function":"function.txt",
			"test":"test.txt"
                }
        });

        var sTemplateType = "Snippet Type";
        var sFileName = __dirname + "/Project/test_Project.js";

        xSnip.snip( sTemplateType ).then(function( Template ) {
                file.create({
                        "Name": sFileName,
                        "Body": Template
                }).then(function() {
                        console.log("Done.");
                }).catch(function( Error ) {
                        console.log( "File error: " + Error );
                });
        }).catch(function( Error ) {
                console.log("Snip error: " + JSON.stringify( Error ));
        });
        //*/

});
