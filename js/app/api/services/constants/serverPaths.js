/*global api */

/**   
* @framework angular
* @kind jsConcept
* @type constant
* @name SERVER_PATHS
* @memberof module:api
* @Description Contains Server paths for asynchronous calls.                
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
*/

api.constant('SERVER_PATHS', {
	
	/**
    * @const 
    * @name  APP_MAIN_PATH
    * @memberof module:api.SERVER_PATHS
    * @public
    * @static
    * @type {String} 
    * @default Main oath of the app 
    */
    
	APP_MAIN_PATH : './database/',
	
    /**
    * @const 
    * @name  LIST_OF_RECIPES
    * @memberof module:api.SERVER_PATHS
    * @public
    * @static
    * @type {String} 
    * @default Path for lits recipies 
    */
    
	LIST_OF_RECIPES : 'list.json'
    

    
});
  