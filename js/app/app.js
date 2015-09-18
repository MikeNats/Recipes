/*global angular*/

/**
* @framework angular 
* @kind module
* @name app 
* @variable app 
* @public
* @static
* @requires ngRoute
* @requires ngAnimate
* @requires routeSateModule
* @requires ui.router 
* @requires uiServices+module:uiServices
* @requires uiServices+module:api
* @requires uiServices+module:feuatures
* @description App router. 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9   
*/

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.router', 'uiServices', 'feuatures',  'api']).run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

        /**   
        * @framework angular 
        * @kind jsConcept
        * @type initializer        
        * @name run
        * @memberof module:app
        * @requires $rootScope
        * @requires $state
        * @requires $stateParams
		* @Description Events before templates are been loaded
        */
         
        "use strict";

        

	
	}]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		
		"use strict";
        
        /**   
        * @framework angular 
        * @kind jsConcept
        * @type configuration        
        * @name config
        * @memberof module:app
        * @requires $stateProvide
        * @requires $urlRouterProvider
        * @Description Routing of the App
		*
		* - state: recipes | url: "/recipes"
		* -- Loads view: "indexPage": { templateUrl: "views/indexPage.html" }
        *
		* - state: recipe | url: "/recipe"
        * -- Loads view: "recipePage": { templateUrl: "views/recipPage.html" }
        */
		
		$urlRouterProvider.otherwise('/recipes');
		
		// Home //
		$stateProvider.state("recipes", {
			
			url: "/recipes",
            
            views: {
				"indexPage": { templateUrl: "views/recipesPage.html" }

	
			}
        
        }).state("recipe", {
			
			url: "/recipe/*path",
			views: {
				"recipePage": { templateUrl: "views/recipePage.html" }
			}

			
		});
	}]);





