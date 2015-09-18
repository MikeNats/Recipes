/*global angular*/
/*global features*/
/**
* @framework angular  
* @kind jsConcept  
* @type factory
* @name pagination
* @memberof module:features
* @Description Pagination plug-in 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
 */




features.factory('pagination', [function () {
    
    'use strict';
    
	/**  
    * @class
    * @name pagination  
    * @memberof module:features.pagination
    * @classdesc  Encapsulate pagination functionality.
    */
    
	var pagination = {};
	
	/**  
    * @member
    * @name currentPage  
    * @memberof module:features.pagination.pagination
    * @Description  Current vissible page.
    */
	
    pagination.currentPage = -1;
   
	/**  
    * @member
    * @name numOfPages  
    * @memberof module:features.pagination.pagination
    * @Description Max number of pages.
    */
    pagination.numOfPages = 0;
	
	/**  
    * @member
    * @name allowData 
	* @param {Array} data
	* @param {Integer} limit	
	* @return {Array}
    * @memberof module:features.pagination.pagination
    * @Description Filters given array according to the given limit and the {@link numOfPages}
	* Mathod is overloaded with a thrird boolean  argument that sets currentPage = 1
    */
	pagination.allowData = function (data, limit, reset) {
		

		if (reset) {
			
			pagination.currentPage = 1;
		}
		
		if (limit * pagination.currentPage > data.length) {
			
			return data;
			
		} else {

			 
			return data.slice(0, limit * pagination.currentPage);
		}
	
	};
    
	return {
		
		/**
		* @function
        * @name init 
        * @memberof module:features.pagination
        * @public
        * @static
		* @param {Array} data
		* @param {Integer} limit
		* @return {Array}
        * @Description  Initialize visible data according to pagination.
        */
		
		init : function (data, limit) {


			pagination.numOfPages = data.length / limit;


			if (pagination.numOfPages > 0) {

				pagination.currentPage = 1;

				return data.slice(0, limit);

			} else {

				pagination.currentPage = -1;

				return data;
			}

		},
		/**
		* @function
        * @name showNextPage 
        * @memberof module:features.pagination
        * @public
        * @static
		* @param {Array} data
		* @param {Integer} limit
		* @return {Array}
        * @Description  Increase {@link currentPage} and  returns visible data according to  limit and the {@link numOfPages}
        */
		
		showNextPage : function (data, limit) {


			pagination.currentPage = pagination.currentPage + 1;

			return pagination.allowData(data, limit);
		},
		
		/**	
		* @function
        * @name update 
        * @memberof module:features.pagination
        * @public
        * @static
		* @param {Array} data
		* @param {Integer} limit
		* @return {Array}
        * @Description Returns visible data according to  limit and the {@link numOfPages}
        */
		update : function (data, limit) {
			
			var args = Array.prototype.slice.apply(arguments);

			return pagination.allowData(data, limit, args[2]);
		}
    };
        

   
}]);

 


