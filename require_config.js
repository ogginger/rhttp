//require_config.js: Requirejs configuration.

module.exports = {
<<<<<<< HEAD
        nodeRequire: require,
        baseUrl: "rhttp",
        paths: {
=======
	nodeRequire: require,
	baseUrl: "Project",
	paths: {
>>>>>>> 06d62d229e7baeda5c4c6da6995efb4abab8fbca
		"rsvp": "../lib/rsvp.min",
		"backbone": "../lib/backbone.min",
		"underscore": "../lib/underscore.min",
		"http": "lib/http.min"
	},
	bundles: {
		"../lib/log.min": [ "log" ],
		"../lib/snip.min": [ "Snip" ],
		"../lib/file.min": [ "file" ],
        "../lib/promise.min": [ "promise" ],
		"../lib/testsuite.min": [ "TestSuite" ],
		"../lib/code.min": [ "code" ]
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
