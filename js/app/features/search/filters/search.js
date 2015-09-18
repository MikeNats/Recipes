/*global  features*/
/*global angular*/

/**   
* @framework angular  
* @kind jsConcept  
* @type filter
* @name searchKeyWord
* @memberof module:features
* @Description  Search multiple attributes value in an Array of Objects using a KeyWord.
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

   
features.filter('searchKeyWord', function () {
	
	"use strict";
	
	
		/** 
        * @function 
        * @name return
        * @memberof module:features.searchKeyWord
        * @public
		* @param {Array} data
		* @param {String} keyWord
		* @param {Array} attrybutes	
		* @param {Int} throttle			
		* @static
		* @return {Array}		
		* @Description Implements search in the array of objects.
		* Usage searchKeyWord(data, keyWord, attrybutes, throttle).
        */

		
	return function (data, keyWord, attrybutes) {
		
		var result = [],
            search = function (data, keyWord, attrybutes) {
				var record, atr, results = [], searchInString = '', noResults = [];
				if (keyWord) {
					keyWord = keyWord.toLowerCase();
                    for (record = 0; record < data.length; record = record + 1) {//for array cell
                       
                        for (atr = 0; atr < attrybutes.length; atr = atr + 1) {// for each attribute that has to be checked
							
                            searchInString = searchInString + " " + data[record][attrybutes[atr]];// merge attribute content
                           
                        }
					
                        if (searchInString.toLowerCase().indexOf(keyWord) > -1) {//if exist
         
                            results.push(data[record]);//add to results
                        } else {
                            noResults.push(data[record]);//add to noResults
                        }
                        
                        searchInString = '';
					}
				}

				return results;
			};
        
        return search(data, keyWord, attrybutes);
		
	};

	
});
