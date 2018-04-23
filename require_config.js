//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: "/*Project*/",
        paths: {
		"rsvp": "../lib/rsvp.min",
		"backbone": "../lib/backbone.min",
		"underscore": "../lib/underscore.min"
	},
        bundles: {
		"../lib/snip.min": [ "Snip" ],
		"../lib/file.min": [ "file" ],
                "../lib/promise.min": [ "promise" ],
		"../lib/testsuite.min": [ "TestSuite" ]
	},
	suppress: {
		nodeShim: true
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
                },
		"TestSuite": {
			deps: [
				"backbone",
				"rsvp"
			],
			exports: "TestSuite"
		}
	}
};
