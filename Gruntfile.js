module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: "**/*.js",
            tasks: ["run:node_main"]
        },
        run: {
            node_main: {
                cmd: "node",
                args: [ "main.js" ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-run");
};