/*global uiServices*/


/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name mainAppController
* @memberof module:uiServices
* @Description Controlls the error messages.
* @requires $timeout
* @requires $rootScope
* @requires $scope
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.controller('mainAppController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
	
	"use strict";

    /**  
    * @class
    * @name $scope  
    * @memberof module:uiServices.mainAppController
    * @classdesc  Controller's local scope.
    */
    
    /** 
    * @member 
    * @name errorMessage 
    * @type {String}
    * @memberof module:uiServices.mainAppController.$scope
    * @Description Stores error message
    */
    
    $scope.errorMessage = null;
    
	

    /** 
	* @event 
	* @name errorOccurred 
	* @type {$on}
    * @memberof module:uiServices.mainAppController
    * @Description When errorOccurred event is triggered by $emit from child controller
	* the errorMessage container is been populated in the ui with the transmited error message
    */
    $rootScope.$on('errorOccurred', function (event, data) {
		//update scope for ng-if etc to reevaluate clauses
		$timeout(function () {
			$scope.errorMessage = data;
			$scope.$apply();
		});
    });
    
    
    
    /** 
	* @event 
	* @name $stateChangeStart 
	* @type {$on}
    * @memberof module:uiServices.mainAppController
    * @Description When state is changing errorMessage is reset to null and errorMessage container disapears.
    */
    $rootScope.$on('$stateChangeStart', function (event, data) {
    
        $scope.errorMessage = null;
    
    });
    
    
    
}]);
