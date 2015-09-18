/*global  features*/
/*global angular*/

/**   
* @framework angular  
* @kind jsConcept  
* @type filter
* @name shortArray
* @memberof module:features
* @Description  Shorting object array by given attribute.
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

   
features.filter('shortArray', function () {
	
	"use strict";
	
	/**  
	* @function 
	* @name return
	* @memberof module:features.shortArray
	* @public
	* @param {Array} data
	* @param {String} property
	* @param {Boolean} reverse		
	* @static
	* @return {Array}		
	* @Description Shorting based on given attribute.
	* Usage shortArray(data, property, isReverse)
	*/
		
	return function (data, property, isReverse) {
		
		var filtered = [];
		angular.forEach(data, function (data) {
			filtered.push(data);
		});
		
		filtered.sort(function (a, b) {
			return (a[property] > b[property] ? 1 : -1);
		});
		
		if (isReverse === 'descending') {
			filtered.reverse();
		}
		return filtered;
		
	};

	
});
