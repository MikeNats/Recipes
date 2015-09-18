/*global api*/
/*global console*/

/** 
* @framework angular  
* @kind jsConcept  
* @type factory
* @name GET
* @memberof module:api
* @requires $http 
* @requires apiModule+module:apiModule.SERVER_MESSAGE 
* @Description Restfull call to commit data to backend.
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


api.factory('GET', ['$http', 'SERVER_MESSAGE', function ($http, SERVER_MESSAGE) {
   
	"use strict";
    
    
    /** 
    * @class   
    * @name fetching
    * @memberof module:api.GET
    * @classdesc Encapulates data transmition to servlet etc..
    */
    
    var fetching = function (path) {
      
        
     
        
        /** 
        * @member   
        * @name return
        * @memberof module:api.GET.fetching
        * @return xhttp success/fail data
        * @classdesc transmition to servlet
        */
        return $http({
            method: 'GET',
            url: path
        }).success(function (serverResponse, status, headers, config) {
			console.info('DATA WAS FETCHED: ' + SERVER_MESSAGE.GET_SUCCESS + ' ' + status);

        }).error(function (serverResponse, status, headers, config) {
			console.info('DATA WAS FETCHED: ' + SERVER_MESSAGE.GET_ERROR + ' ' + status);
        
        });
            
         
    };
    
    return {
         
        /** 
        * @function 
        * @name data
        * @memberof  module:api.GET
        * @param {String} path 
        * @public
        * @static
        * @return xhttp success/fail message
		* @Description Usage GET.data( url ).
        */
        
        data : function (path) {
           
            return fetching(path);
  
        }
          
    };
    

}]);

