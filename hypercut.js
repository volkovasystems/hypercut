/*:
	@include:
		{
			"set-intersection": "setIntersection"
		}
	@end-include

	@module-documentation:

	@end-module-documentation

	@module-configuration:
		{
			"moduleName": "hyperCut",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration

	@export:
		{
			"queryModule": "queryModule"
		}
	@end-export
*/

HTTPRequest = null;
namespaceList = [ ];
eventList = [ "progress", "load", "abort", "error", "loadend" ];

boot = function boot( ){
	HTTPRequest = new XMLHttpRequest( );
};

queryModule = function queryModule( namespace, location ){

};

digestModules = function digestModules( ){

};

loadModule = function loadModule( location, eventHandlers ){
	HTTPRequest.open( "GET", location, true );
	HTTPRequest.setRequestHeader( "Content-Type", "application/json;charset=encoding" );
	
	if( self.eventHandlers.isExisting( ) ){
		var boundHandlers = [ ];
		for( var handlerName in eventHandlers ){
			HTTPRequest.addEventListener( handlerName, eventHandlers[ handlerName ] );
			boundHandlers.push( handlerName );
		}
		collectionDifference( eventList, boundHandlers );
	}

};

loadModules = function loadModules( ){

};