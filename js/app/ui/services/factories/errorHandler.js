/*global  uiServices*/
/*global angular*/

/**   
* @framework angular  
* @kind jsConcept  
* @type factory
* @name errorHandler
* @memberof module:uiServices
* @Description  If given array is empty  or undefined returns given error message.
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

   
uiServices.factory('errorHandler', ['$rootScope', function ($rootScope) {
	
	"use strict";
	/*
    * @class   
    * @name orderArray   
    * @memberof module:uiServices.errorHandler       
    * @classdesc  Encapulates isArrayEmpty functionality.
    */
    
    var transmitError = function (message) {
        
        $rootScope.$emit('errorOccurred', message);
      
    };

	return {
	
        /** 
        * @function 
        * @name checkIfArrayOfDataRecived
        * @memberof module:uiServices.errorHandler
        * @public
		* @param {Array} data
		* @param {String} message		
		* @static	
		* @Description If given array is empty  or undefined $emit to main Controller the given message.
		* Usage: 
		* errorHandler.checkIfArrayOfDataRecived([with data], message) nothing happends
		* errorHandler.checkIfArrayOfDataRecived([], message) error message appended			* errorHandler.checkIfArrayOfDataRecived([], null) error message disapears	
        */
        
		checkIfArrayOfDataRecived : function (data, message) {
			
            if (data.length === 0 || !data) {
                
                transmitError(message);
            }
        }
        
        
        
    };
}]);
