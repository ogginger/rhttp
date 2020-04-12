//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
	"request": "empty:",
	"vm": "empty:",
	"requirejs": "empty:",
	"http": "lib/http.min",
	"rsvp": "lib/rsvp.min"
    },
    exclude: [ "request", "vm" ],
    name: "rhttp",
    out: "rhttp.min.js"
})
