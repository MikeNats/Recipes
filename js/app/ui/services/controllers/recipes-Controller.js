/*global uiServices*/

/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name recipiesController
* @memberof module:uiServices
* @Description Controller of recipes page
* @requires $scope
* @requires $filter
* @requires GET+module:api.GET
* @requires pagination+module:features.pagination
* @requires SERVER_MESSAGE+module:api.SERVER_MESSAGE
* @requires SERVER_PATHS+module:api.SERVER_PATHS
* @requires errorHandler+module:uiServices.errorHandler 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.controller('recipiesController', ['$scope', 'GET', '$filter', 'pagination', 'SERVER_MESSAGE', 'errorHandler', 'SERVER_PATHS', '$timeout', function ($scope, GET, $filter, pagination, SERVER_MESSAGE, errorHandler, SERVER_PATHS, $timeout) {
    
	"use strict";
    
    /**  
    * @class
    * @name $scope  
    * @memberof module:uiServices.recipiesController
    * @classdesc  Controller's local scope.
    */

   
    /** 
    * @class 
    * @name recipes 
    * @memberof module:uiServices.recipiesController.$scope
    * @Description Encapsulates recipes scope.
    */
    $scope.recipes = {};
 
    /** 
    * @member 
    * @name orderBy 
    * @type {String}
    * @memberof module:uiServices.recipiesController.$scope.recipes
    * @Description Stores Order of the recipes.
    */
	
    $scope.recipes.orderBy = 'none';

    /** 
    * @member 
    * @name search 
    * @type {String}
    * @memberof module:uiServices.indexController.$scope.recipes
    * @Description Stores search query.
    */
	$scope.recipes.search = 'Search';
 
	/** 
    * @member 
    * @name search 
    * @type {String}
    * @memberof module:uiServices.recipiesController.$scope.recipes
    * @Description Stores pagination Limit.
    */
    $scope.recipes.paginationLimit = 10;
 
	/** 
	* @member 
	* @name search 
	* @type {String}
	* @memberof module:uiServices.recipiesController.$scope.recipes
	* @Description Carently view recipes
	*/
	$scope.recipes.uiVisible = 0;

	/** 
	* @event 
	* @name GET 
	* @type {XHTTPrequest}
    * @memberof module:uiServices.recipiesController.$scope.recipes
    * @Description Fetch the list of recipes and inisialize $scope.recipes.data.
    */
    GET.data(SERVER_PATHS.APP_MAIN_PATH + SERVER_PATHS.LIST_OF_RECIPES).then(function (response) {

		errorHandler.checkIfArrayOfDataRecived(response.data, SERVER_MESSAGE.DATA_ERROR);

		$scope.recipes.data = response.data;
		
		//update scope for ng-if etc to reevaluate their clauses
		$timeout(function () {
			
			$scope.recipes.recipes = pagination.init($scope.recipes.data,  $scope.recipes.paginationLimit);
			
			$scope.recipes.uiVisible = $scope.recipes.recipes;
			
			$scope.$apply();
		});
		
	}, function () {
		errorHandler.checkIfArrayOfDataRecived([], SERVER_MESSAGE.DATA_ERROR);
	});
   
	 
   /**
	* @member
	* @name readMore 
	* @memberof module:uiServices.recipiesController.$scope.recipes
	* @param {args} no-arguments
	* @Description When user selects read more pagination is trigered to update  {@link $scope.recipes.data}
	* Invokes pagination {@link module:features showNextPage}.
    * Invokes filter {@link module:features.searchKeyWord searchKeyWord} if search is active.
	*/
    $scope.recipes.readMore = function () {
		
		$scope.recipes.recipes = pagination.showNextPage($scope.recipes.data,  $scope.recipes.paginationLimit);
		
		if ($scope.recipes.search  &&  $scope.recipes.search !== 'Search') {
			$scope.recipes.recipes =  $filter('searchKeyWord')($scope.recipes.recipes, $scope.recipes.search, ['name', 'ingredients']);
		}
		$scope.$apply();
		$scope.recipes.uiVisible = document.getElementsByClassName("ng-pristine").length;
	};
    
   /**
	* @member
	* @name setOrder 
	* @memberof module:uiServices.recipiesController.$scope.recipes
	* @param {arguments} no-arguments
	* @Description When user selects displayed order, data are filtered according to user input, and pagination is updated.
	* Invokes pagination {@link module:features showNextPage} .	
    * Invokes filter {@link module:features.searchKeyWord searchKeyWord} if search is active.
    * Invokes pagination {@link module:features update}.
	*/
	
    $scope.recipes.setOrder = function () {
       
       
		
		if ($scope.recipes.search && $scope.recipes.search !== 'Search') {
			$scope.recipes.data = $filter('shortArray')($scope.recipes.data, 'cookingTime',  $scope.recipes.orderBy);
			$scope.recipes.recipes =  $filter('searchKeyWord')($scope.recipes.data, $scope.recipes.search, ['name', 'ingredients']);
		} else {
			$scope.recipes.recipes = $filter('shortArray')($scope.recipes.data, 'cookingTime',  $scope.recipes.orderBy);
			$scope.recipes.recipes =  pagination.update($scope.recipes.recipes,  $scope.recipes.paginationLimit);
		
		}
	

     
    };
 
	
   /**
	* @member
	* @name searchKeyword 
	* @memberof module:uiServices.recipiesController.$scope.recipes
	* @param {arguments} no-arguments
	* @Description When user types a search keyword, searh filter updates {@link $scope.recipes.data} and then thepagination
	* Invokes filter {@link module:features.searchKeyWord searchKeyWord}.
	* Invokes filter {@link module:features.shortArray shortArray}.
    * Invokes pagination {@link module:features update} .
	*/
	
    $scope.recipes.searchKeyword = function () {
		
        if ($scope.recipes.search && $scope.recipes.search !== 'Search') {
            
            $scope.recipes.recipes =  $filter('searchKeyWord')($scope.recipes.data, $scope.recipes.search, ['name', 'ingredients']);
			
            $scope.recipes.recipes = pagination.update($scope.recipes.recipes, $scope.recipes.paginationLimit);
			
			errorHandler.checkIfArrayOfDataRecived($scope.recipes.recipes, SERVER_MESSAGE.SERACH_ERROR);
			
			if ($scope.recipes.recipes.length > 0) {
				errorHandler.checkIfArrayOfDataRecived([], null);//hide error messages
			}
			
        } else {
			errorHandler.checkIfArrayOfDataRecived([], null);//hide error messages
			$scope.recipes.recipes = $scope.recipes.data;
			$scope.recipes.recipes = pagination.update($scope.recipes.recipes, $scope.recipes.paginationLimit);
		}
		
    };

	/**
	* @member
	* @name back 
	* @memberof module:uiServices.indexController.$scope.recipes
	* @param {arguments} no-arguments
	* @Description After user search for recepies back button appears. On click trigers
	* The Back function
	* Initialize  {@link search}
	* Initialize  {@link recipes}
	*/
	$scope.recipes.back = function () {
		
		$scope.recipes.search = 'Search';
		$scope.recipes.recipes = $scope.recipes.data;
		errorHandler.checkIfArrayOfDataRecived([], null);//hide error messages
		$scope.recipes.recipes = pagination.update($scope.recipes.data, $scope.recipes.paginationLimit, true);
	};
    

	/**
	* @member
	* @name buildUrl 
	* @memberof module:uiServices.indexController.$scope.recipes
	* @param {String} name
	* @Description As there are no specs and I had to create dynamic links, There was a pattern between indevidual recipies names and the relavant json files name.
	* The regex turn string to lower case and replaces: 
    * ' ->  ""
    * " " -> -
	*/
    
    /*jslint regexp: true*/
    $scope.recipes.buildUrl = function (name) {
        return name.toLowerCase().replace(/'/g, '').replace(/ /g, '-');
    };
  
   
}]);


 
 