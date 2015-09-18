/*global api */

/**   
* @framework angular
* @kind jsConcept
* @type constant
* @name SERVER_MESSAGE
* @memberof module:api
* @Description Contains Server status messages. Same Error messages can be found in the Back End enviroment.                 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
*/

api.constant('SERVER_MESSAGE', {

	
	 /**
    * @const 
    * @name  GET_SUCCESS
    * @memberof module:api.SERVER_MESSAGE  
    * @public
    * @static
    * @type {Boolean} 
    * @default Data was recived succesfully
    */
    
	GET_SUCCESS : true,
    

    
    /**
    * @const 
    * @name  GET_ERROR
    * @memberof module:api.SERVER_MESSAGE  
    * @public
    * @static
    * @type {Boolean} 
    * @default Fail to reach server.
    */
    
	GET_ERROR : false,
	
	/**
    * @const 
    * @name  DATA_ERROR
    * @memberof module:api.SERVER_MESSAGE  
    * @public
    * @static
    * @type {Boolean} 
    * @default No data availiable.
    */
    
	DATA_ERROR : 'Sorry, we currently have no recipes for you',
	
	
    /**
    * @const 
    * @name  SERACH_ERROR
    * @memberof module:api.SERVER_MESSAGE  
    * @public
    * @static
    * @type {Boolean} 
    * @default Fail to find given value.
    */
    
	SERACH_ERROR : 'Sorry, nothing matched your filter term'
    
});
  