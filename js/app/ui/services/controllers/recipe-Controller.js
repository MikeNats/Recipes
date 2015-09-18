/*global uiServices*/

/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name recipeController
* @memberof module:uiServices
* @Description Controller of recipe page
* @requires $scope
* @requires $filter
* @requires $location
* @requires $timeout
* @requires $stateParams
* @requires GET+module:api.GET
* @requires pagination+module:features.pagination
* @requires SERVER_MESSAGE+module:api.SERVER_MESSAGE
* @requires SERVER_PATHS+module:api.SERVER_PATHS
* @requires errorHandler+module:uiServices.errorHandler 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.controller('recipeController', ['$scope', 'GET', '$stateParams', 'SERVER_MESSAGE', 'SERVER_PATHS', 'errorHandler', '$location', '$timeout', function ($scope, GET, $stateParams, SERVER_MESSAGE, SERVER_PATHS, errorHandler, $location, $timeout) {
    
	"use strict";
    
  
    
    /**  
    * @class
    * @name $scope  
    * @memberof module:uiServices.recipeController
    * @classdesc  Controller's local scope.
    */

   
    /** 
    * @class 
    * @name recipe 
    * @memberof module:uiServices.recipeController.$scope
    * @Description Encapsulates recipes scope.
    */
    $scope.recipe = {};
	
     /** 
    * @class 
    * @name recipe 
	* @param {arguments} no-args
    * @memberof module:uiServices.recipeController.$scope
    * @Description Evaluates relevant scope varible to check if ingridients are grouped.
    */
	$scope.recipe.isGroup = function () {
		
		if ($scope.recipe.data.ingredients[0].group !== undefined) {

			return true;
		}
		
		return false;
	};
 
	/** 
	* @event 
	* @name GET 
	* @type {XHTTPrequest}
    * @memberof module:uiServices.recipeController.$scope.recipe
    * @Description Fetch the list of recipes and inisialize $scope.recipes.data.
    */
    GET.data(SERVER_PATHS.APP_MAIN_PATH + $stateParams.path + '.json').then(function (response) {
	
		errorHandler.checkIfArrayOfDataRecived(response, SERVER_MESSAGE.DATA_ERROR);

	    $scope.recipe.data = response.data;
		
		//update scope for ng-if etc to reevaluate clauses
		$timeout(function () {
			$scope.recipe.group = $scope.recipe.isGroup();
			$scope.$apply();
		});
       
	}, function () {
		errorHandler.checkIfArrayOfDataRecived([], SERVER_MESSAGE.DATA_ERROR);
	});
     
	/** 
	* @event 
	* @name goToIndex 
	* @type {$location}
    * @memberof module:uiServices.recipeController.$scope
    * @Description Redirects to index.
    */

	$scope.recipe.goToIndex = function () {
		$location.path('#/');
	};
	

   
}]);


 
 