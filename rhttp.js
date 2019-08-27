//rhttp.js: Functional Logic.

define([
	"vm",
	"requirejs",
	"http"
], function(
	vm,
	requirejs,
	http
) {
  return {	
	load: function( moduleName, Require, onLoad, Config ) {
		var Context = requirejs.s.contexts._;
		http.get( moduleName ).then(function( Body ) {
			vm.createContext( requirejs );
			vm.runInContext( Body, requirejs);

			Context.completeLoad( moduleName );

			var Module = Context.registry[moduleName];	
			Module.enable();
			Module.check();		
	
			onLoad(Context.defined[moduleName]);
		}).catch(function( Error ) {
			setTimeout(function() { onLoad.error(JSON.stringify( Error )); });
		});
	}
  };
});
