//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");

requirejs.config({
        nodeRequire: require,
        baseUrl: "/*Project*/",
        paths: {
		"../rsvp": "lib/rsvp.min",
		"../backbone": "lib/backbone.min",
		"../underscore": "lib/underscore.min"
	},
        bundles: {
		"../lib/snip.min": [ "Snip" ],
		"../lib/file.min": [ "file" ],
                "../lib/testsuite.min": [ "TestSuite" ],
                "../lib/promise.min": [ "promise" ]
	},
	shim: {
		"underscore": {
			deps: [
				"jquery"
			],
			exports: "_"
		},
		"backbone": {
			deps: [
				"underscore"
			],
			exports: "Backbone"
		},
		"file": {
			deps: [
				"fs",
				"rsvp"
			],
			exports: "file"
		},
		"Snip": {
			deps: [
				"file",
				"backbone"
			],
			exports: "Snip"
		},
		"promise": {
                        deps: [
                                "rsvp"
                        ],
                        exports: "promise"
                }

	}
});

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
                "Dir": "~/PROJECT_DIR/Snippets/",
                "Snippets": {
                        "testsuite":"testsuite.txt",
                        "function":"function.txt"
                }
        });

        var sTemplateType = "Snippet Type";
        var sFileName = "~/PROJECT_DIR/Functions/tests/test_MethodUnderTest.js";

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
