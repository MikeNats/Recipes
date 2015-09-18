(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Recipes Documentation").constant('$readme',  "<h1>Recipes  App </h1><p>Responsive single page application<br /></p>\n<h4>Technologies:</h4>\n\n<ul>\n<li>HTML 5   </li>\n<li>Zurd Foundation v5.5</li>\n<li>CSS 2&amp;3</li>\n<li>SASS</li>\n<li>Angular JS v1.3.9</li>\n<li>JSLint</li>\n<li>Grunt JS</li>\n</ul>\n<h2>Front End Architecture</h2><h4><strong>HTML</strong></h4>\n\n<p>The HTML of the App is been divated in three categories:</p>\n<ul>\n<li>One <strong>Index.html </strong></li>\n<li>Multiple <strong>Page.html</strong> ex (recipesPage.html, recipePage.html).</li>\n<li>Multiple <strong>Slot.html</strong>  ex (logo-Slot.html, search-Slot.html).\n<br></li>\n</ul>\n<p><strong>Index.html</strong> has attached the <strong>Main-App-Controller</strong> in its top level html tag <u>id=appWrapper</u> .Inside that all the dynamic data binding is taking place.<br/></p>\n<p>The Index.html contains HTML section tags that are been populated dynamicly by the router with the usage of ng-view. Eatch section tag represent a page and is populated by a unique Page.html <br /></p>\n<p>Finally Index.html contains a HTML section tag <u>id=errorMessage</u>. The reason is because  <u>id=errorMessage</u> must be sheard accross all pages and is been controled and populated by the Main-App-Controller.<br/></p>\n<p>Eatch <strong>Page.html</strong> has one controler and its own HTML structure: Header Section Footer. Inside that stracture HTML section tags are been placed that are Slots.html and are been populated with ng-include <br /></p>\n<p><strong>Slots.html</strong> are unique resusable html stractures that can be sloted inside pages.</p>\n<p>The Page that are been used are: <br /></p>\n<h3 style='width:100%'  class='docExample'>recipesPage</h3>\nAnd has the slots:<br/>\n<br/>\n<h3 style='width:100%' class='docExample'>logo-Slot </h3>\n<h3 style='width:100%' class='docExample'>orderBy-Slot </h3>\n<h3 style='width:100%' class='docExample'>search-Slot </h3>\n<h3 style='width:100%' class='docExample'>recipes-Slot </h3>\n<br/>\n\n<h3  style='width:100%'class='docExample'>recipePage</h3>\nand has the slots:<br/>\n<br />\n<h3 style='width:100%' class='docExample'>logo-Slot </h3>\n<h3 style='width:100%' class='docExample'>recipes-Slot</h3>\n<br />\n<br />\n<h4><strong>CSS</strong></h4><br>\nThe app is been built with the usage of Zurb Foundation and SASS to created a responsive and easy to maintain App.<br />\nThe SASS files divided in three main folders: <br />\n\n<h3 style='width:100%' class='docExample'> Fonts</h3>\n<h3 style='width:100%' class='docExample'> Header</h3>\n<h3 style='width:100%' class='docExample'> MainContent</h3>\n\n<p>In every folder there are the individual .scss files for eatch Page and slot.\nAlso there is a file global for applying global styles.</p>\n<p><br /></p>\n<h4><strong>JavaScript</strong></h4>\n\n<p>The Application been divided into four modules:</p>\n<p>The <a href=\"#!/module:app\">app</a> module is on the top level of the hierarchy. The rest three modules are dependencies of the App.</p>\n<p>That modular approach makes the application scalable and easy to be tested as the functionalities are decoupled.</p>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:app\">app</a></span></h3>\nBootstraps the app.</p>\n<ul>\n<li>Implements the routing of the app.</li>\n</ul>\n<p><h3 class='literal'><span class='kind'>module</span> <span> <a href=\"#!/module:ui\">ui</a> </span></h3>\nProvides services for initializing and controlling the logic of each the page:</p>\n<ul>\n<li>Page Controllers</li>\n<li>Error Handler</li>\n</ul>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:features\">features</a></span></h3> \nProvides all the features of the app:</p>\n<ul>\n<li>Search</li>\n<li>Order</li>\n<li>Pergination</li>\n</ul>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:api\">api</a></span></h3> \nProvides all the services for interacting with the server.</p>\n<ul>\n<li>Requests </li>\n<li>Error messages</li>\n<li>Paths</li>\n</ul>\n<h2>Maintenance of the App</h2><p><h4>About</h4> \nThe development environment of the app is consisted from the below folders:</p>\n<ul>\n<li><p><strong>Documentation </strong><br /> \n  Contains a mini SPA App that has all the JavaScript-Angular documentation, producted dynamically from the comments that are been placed in the code. More about the automated documentation app can be found in my github https://github.com/MikeNats/ng-docs.</p>\n</li>\n<li><p><strong>bower_components </strong><br /> \n  Contains all the necessary files for foundation.</p>\n</li>\n<li><p><strong>css </strong><br /> \n  Contains the minified development version of the css. Its been produces dynamical from automated build that are defined to Grunt.js file.</p>\n</li>\n<li><p><strong>js</strong><br /> \n  Contains the JavaScripts for the development environment.    </p>\n</li>\n<li><p><strong>scss </strong><br /> \n  Contains the SASS files.</p>\n</li>\n<li><p><strong>node_modules </strong><br /> \n  Contains the node modules that are needed from the Grunt to implement the automated builds</p>\n</li>\n<li><p><strong>view </strong><br /> \n  Contains the views of the App. In the development environment make use of unminified version.</p>\n</li>\n<li><p><strong>Grunt.js </strong><br /> \n  Task manager for automated builds</p>\n</li>\n<li><p><strong>index.html</strong><br /> \n  The index page of the app.    </p>\n</li>\n<li><p><strong>app </strong><br /> \n  Contains the minified version of the app. The folder is been updated dynamical from automated build that are defined to Grunt.js file. All the files of the app are been included automatically from the development environment to that folder. That folder should be then uploaded in the server as it is for the up to run. </p>\n</li>\n</ul>\n<p><br/></p>\n<p><h4>Grunt</h4><br>The Development environment of the app is been automated with Grunt.<br/>\nEvery time that a change is been applied, Grunt will validated the code, minified and extract the resulted app into the app folder.<br/>\nBefore any change is been applied to the development files, <strong>Grunt must be triggered</strong>.</p>\n<p>To triger Grunt open CMD:<br /></p>\n<pre class=\"prettyprint source lang-bash\"><code>cd pathToTheDevelopmentStack</code></pre><pre class=\"prettyprint source lang-bash\"><code>grunt watch</code></pre><p><h4>Grunt Taks</h4></p>\n<ul>\n<li>minifyHtml: Compress html</li>\n<li>sass: Compiles Compress and consolidate into one folder all the sass files</li>\n<li>jshint: Validation of all js files</li>\n<li>glify: Compress and consolidate into one folder all the js files</li>\n<li>watch: When a file is changed and saved runs all the above tasks</li>\n</ul>").constant('$doclets', [
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "api",
        "value": "api"
      }
    ],
    "kind": "module",
    "name": "api",
    "access": "public",
    "scope": "static",
    "description": "<p>Contains interface for server interaction.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:api",
    "$href": "module:api",
    "$id": "T000002R000002"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "constant"
      ]
    },
    "name": "SERVER_MESSAGE",
    "memberof": "module:api",
    "description": "<p>Contains Server status messages. Same Error messages can be found in the Back End enviroment.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:api.SERVER_MESSAGE",
    "jsConcept": true,
    "$href": "module:api.SERVER_MESSAGE",
    "$id": "T000002R000004"
  },
  {
    "kind": "constant",
    "name": "GET_SUCCESS",
    "memberof": "module:api.SERVER_MESSAGE",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "Data was recived succesfully",
    "longname": "module:api.SERVER_MESSAGE.GET_SUCCESS",
    "$href": "module:api.SERVER_MESSAGE#GET_SUCCESS",
    "$id": "T000002R000005"
  },
  {
    "kind": "constant",
    "name": "GET_ERROR",
    "memberof": "module:api.SERVER_MESSAGE",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "Fail to reach server.",
    "longname": "module:api.SERVER_MESSAGE.GET_ERROR",
    "$href": "module:api.SERVER_MESSAGE#GET_ERROR",
    "$id": "T000002R000007"
  },
  {
    "kind": "constant",
    "name": "DATA_ERROR",
    "memberof": "module:api.SERVER_MESSAGE",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "No data availiable.",
    "longname": "module:api.SERVER_MESSAGE.DATA_ERROR",
    "$href": "module:api.SERVER_MESSAGE#DATA_ERROR",
    "$id": "T000002R000009"
  },
  {
    "kind": "constant",
    "name": "SERACH_ERROR",
    "memberof": "module:api.SERVER_MESSAGE",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "defaultvalue": "Fail to find given value.",
    "longname": "module:api.SERVER_MESSAGE.SERACH_ERROR",
    "$href": "module:api.SERVER_MESSAGE#SERACH_ERROR",
    "$id": "T000002R000011"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "constant"
      ]
    },
    "name": "SERVER_PATHS",
    "memberof": "module:api",
    "description": "<p>Contains Server paths for asynchronous calls.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:api.SERVER_PATHS",
    "jsConcept": true,
    "$href": "module:api.SERVER_PATHS",
    "$id": "T000002R000013"
  },
  {
    "kind": "constant",
    "name": "APP_MAIN_PATH",
    "memberof": "module:api.SERVER_PATHS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "Main oath of the app",
    "longname": "module:api.SERVER_PATHS.APP_MAIN_PATH",
    "$href": "module:api.SERVER_PATHS#APP_MAIN_PATH",
    "$id": "T000002R000014"
  },
  {
    "kind": "constant",
    "name": "LIST_OF_RECIPES",
    "memberof": "module:api.SERVER_PATHS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "Path for lits recipies",
    "longname": "module:api.SERVER_PATHS.LIST_OF_RECIPES",
    "$href": "module:api.SERVER_PATHS#LIST_OF_RECIPES",
    "$id": "T000002R000016"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "GET",
    "memberof": "module:api",
    "requires": [
      "module:$http",
      "module:apiModule+module:apiModule.SERVER_MESSAGE"
    ],
    "description": "<p>Restfull call to commit data to backend.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:api.GET",
    "jsConcept": true,
    "$href": "module:api.GET",
    "$id": "T000002R000018"
  },
  {
    "kind": "class",
    "name": "fetching",
    "memberof": "module:api.GET",
    "classdesc": "<p>Encapulates data transmition to servlet etc..</p>",
    "scope": "static",
    "longname": "module:api.GET.fetching",
    "$href": "module:api.GET.fetching",
    "$id": "T000002R000019"
  },
  {
    "kind": "function",
    "name": "data",
    "memberof": "module:api.GET",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "path"
      }
    ],
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "description": "<p>xhttp success/fail message</p>"
      }
    ],
    "description": "<p>Usage GET.data( url ).</p>",
    "longname": "module:api.GET.data",
    "$href": "module:api.GET#data",
    "$id": "T000002R000023"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:api.GET.fetching",
    "returns": [
      {
        "description": "<p>xhttp success/fail data</p>"
      }
    ],
    "classdesc": "<p>transmition to servlet</p>",
    "scope": "static",
    "longname": "module:api.GET.fetching.return",
    "$href": "module:api.GET.fetching#return",
    "$id": "T000002R000024"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "app",
        "value": "app"
      }
    ],
    "kind": "module",
    "name": "app",
    "access": "public",
    "scope": "static",
    "requires": [
      "module:ngRoute",
      "module:ngAnimate",
      "module:routeSateModule",
      "module:ui.router",
      "module:uiServices+module:uiServices",
      "module:uiServices+module:api",
      "module:uiServices+module:feuatures"
    ],
    "description": "<p>App router.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:app",
    "$href": "module:app",
    "$id": "T000002R000026"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "initializer"
      ]
    },
    "name": "run",
    "memberof": "module:app",
    "requires": [
      "module:$rootScope",
      "module:$state",
      "module:$stateParams"
    ],
    "description": "<p>Events before templates are been loaded</p>",
    "scope": "static",
    "longname": "module:app.run",
    "jsConcept": true,
    "$href": "module:app.run",
    "$id": "T000002R000028"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "configuration"
      ]
    },
    "name": "config",
    "memberof": "module:app",
    "requires": [
      "module:$stateProvide",
      "module:$urlRouterProvider"
    ],
    "description": "<p>Routing of the App</p>\n<ul>\n<li><p>state: recipes | url: &quot;/recipes&quot;\n-- Loads view: &quot;indexPage&quot;: { templateUrl: &quot;views/indexPage.html&quot; }</p>\n</li>\n<li><p>state: recipe | url: &quot;/recipe&quot;\n-- Loads view: &quot;recipePage&quot;: { templateUrl: &quot;views/recipPage.html&quot; }</p>\n</li>\n</ul>",
    "scope": "static",
    "longname": "module:app.config",
    "jsConcept": true,
    "$href": "module:app.config",
    "$id": "T000002R000029"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "features",
        "value": "features"
      }
    ],
    "kind": "module",
    "name": "features",
    "access": "public",
    "scope": "static",
    "description": "<p>Contains App features.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:features",
    "$href": "module:features",
    "$id": "T000002R000038"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "filter"
      ]
    },
    "name": "shortArray",
    "memberof": "module:features",
    "description": "<p>Shorting object array by given attribute.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:features.shortArray",
    "jsConcept": true,
    "$href": "module:features.shortArray",
    "$id": "T000002R000040"
  },
  {
    "kind": "function",
    "name": "return",
    "memberof": "module:features.shortArray",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "property"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "name": "reverse"
      }
    ],
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "description": "<p>Shorting based on given attribute.\nUsage shortArray(data, property, isReverse)</p>",
    "longname": "module:features.shortArray.return",
    "$href": "module:features.shortArray#return",
    "$id": "T000002R000041"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "pagination",
    "memberof": "module:features",
    "description": "<p>Pagination plug-in</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:features.pagination",
    "jsConcept": true,
    "$href": "module:features.pagination",
    "$id": "T000002R000043"
  },
  {
    "kind": "class",
    "name": "pagination",
    "memberof": "module:features.pagination",
    "classdesc": "<p>Encapsulate pagination functionality.</p>",
    "scope": "static",
    "longname": "module:features.pagination.pagination",
    "$href": "module:features.pagination.pagination",
    "$id": "T000002R000044"
  },
  {
    "kind": "member",
    "name": "currentPage",
    "memberof": "module:features.pagination.pagination",
    "description": "<p>Current vissible page.</p>",
    "scope": "static",
    "longname": "module:features.pagination.pagination.currentPage",
    "$href": "module:features.pagination.pagination#currentPage",
    "$id": "T000002R000046"
  },
  {
    "kind": "member",
    "name": "numOfPages",
    "memberof": "module:features.pagination.pagination",
    "description": "<p>Max number of pages.</p>",
    "scope": "static",
    "longname": "module:features.pagination.pagination.numOfPages",
    "$href": "module:features.pagination.pagination#numOfPages",
    "$id": "T000002R000048"
  },
  {
    "kind": "member",
    "name": "allowData",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "limit"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "memberof": "module:features.pagination.pagination",
    "description": "<p>Filters given array according to the given limit and the <code>numOfPages</code></p>",
    "scope": "static",
    "longname": "module:features.pagination.pagination.allowData",
    "$href": "module:features.pagination.pagination#allowData",
    "$id": "T000002R000050"
  },
  {
    "kind": "function",
    "name": "init",
    "memberof": "module:features.pagination",
    "access": "public",
    "scope": "static",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "limit"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "description": "<p>Initialize visible data according to pagination.</p>",
    "longname": "module:features.pagination.init",
    "$href": "module:features.pagination#init",
    "$id": "T000002R000053"
  },
  {
    "kind": "function",
    "name": "showNextPage",
    "memberof": "module:features.pagination",
    "access": "public",
    "scope": "static",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "limit"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "description": "<p>Increase <code>currentPage</code> and  returns visible data according to  limit and the <code>numOfPages</code></p>",
    "longname": "module:features.pagination.showNextPage",
    "$href": "module:features.pagination#showNextPage",
    "$id": "T000002R000058"
  },
  {
    "kind": "function",
    "name": "update",
    "memberof": "module:features.pagination",
    "access": "public",
    "scope": "static",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "limit"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "description": "<p>Returns visible data according to  limit and the <code>numOfPages</code></p>",
    "longname": "module:features.pagination.update",
    "$href": "module:features.pagination#update",
    "$id": "T000002R000061"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "filter"
      ]
    },
    "name": "searchKeyWord",
    "memberof": "module:features",
    "description": "<p>Search multiple attributes value in an Array of Objects using a KeyWord.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:features.searchKeyWord",
    "jsConcept": true,
    "$href": "module:features.searchKeyWord",
    "$id": "T000002R000063"
  },
  {
    "kind": "function",
    "name": "return",
    "memberof": "module:features.searchKeyWord",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "keyWord"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "attrybutes"
      },
      {
        "type": {
          "names": [
            "Int"
          ]
        },
        "name": "throttle"
      }
    ],
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "description": "<p>Implements search in the array of objects.\nUsage searchKeyWord(data, keyWord, attrybutes, throttle).</p>",
    "longname": "module:features.searchKeyWord.return",
    "$href": "module:features.searchKeyWord#return",
    "$id": "T000002R000064"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "uiServices",
        "value": "uiServices"
      }
    ],
    "kind": "module",
    "name": "uiServices",
    "access": "public",
    "scope": "static",
    "description": "<p>Conetains User Interface Services.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:uiServices",
    "$href": "module:uiServices",
    "$id": "T000002R000079"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "controller"
      ]
    },
    "name": "mainAppController",
    "memberof": "module:uiServices",
    "description": "<p>Controlls the error messages.</p>",
    "requires": [
      "module:$timeout",
      "module:$scope"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.mainAppController",
    "jsConcept": true,
    "$href": "module:uiServices.mainAppController",
    "$id": "T000002R000081"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mainAppController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope",
    "$href": "module:uiServices.mainAppController.$scope",
    "$id": "T000002R000082"
  },
  {
    "kind": "member",
    "name": "errorMessage",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.mainAppController.$scope",
    "description": "<p>Stores error message</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.errorMessage",
    "$href": "module:uiServices.mainAppController.$scope#errorMessage",
    "$id": "T000002R000083"
  },
  {
    "kind": "event",
    "name": "errorOccurred",
    "type": {
      "names": [
        "$on"
      ]
    },
    "memberof": "module:uiServices.mainAppController",
    "description": "<p>When errorOccurred event is triggered by $emit from child controller\nthe errorMessage container is been populated in the ui with the transmited error message</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.event:errorOccurred",
    "$href": "module:uiServices.mainAppController#errorOccurred",
    "$id": "T000002R000085"
  },
  {
    "kind": "event",
    "name": "$stateChangeStart",
    "type": {
      "names": [
        "$on"
      ]
    },
    "memberof": "module:uiServices.mainAppController",
    "description": "<p>When state is changing errorMessage is reset to null and errorMessage container disapears.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.event:$stateChangeStart",
    "$href": "module:uiServices.mainAppController#$stateChangeStart",
    "$id": "T000002R000087"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "controller"
      ]
    },
    "name": "recipeController",
    "memberof": "module:uiServices",
    "description": "<p>Controller of recipe page</p>",
    "requires": [
      "module:$scope",
      "module:$filter",
      "module:$location",
      "module:$timeout",
      "module:$stateParams",
      "module:GET+module:api.GET",
      "module:pagination+module:features.pagination",
      "module:SERVER_MESSAGE+module:api.SERVER_MESSAGE",
      "module:SERVER_PATHS+module:api.SERVER_PATHS",
      "module:errorHandler+module:uiServices.errorHandler"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.recipeController",
    "jsConcept": true,
    "$href": "module:uiServices.recipeController",
    "$id": "T000002R000089"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.recipeController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipeController.$scope",
    "$href": "module:uiServices.recipeController.$scope",
    "$id": "T000002R000090"
  },
  {
    "kind": "class",
    "name": "recipe",
    "memberof": "module:uiServices.recipeController.$scope",
    "description": "<p>Encapsulates recipes scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipeController.$scope.recipe",
    "$href": "module:uiServices.recipeController.$scope.recipe",
    "$id": "T000002R000091"
  },
  {
    "kind": "class",
    "name": "recipe",
    "params": [
      {
        "type": {
          "names": [
            "arguments"
          ]
        },
        "name": "no-args"
      }
    ],
    "memberof": "module:uiServices.recipeController.$scope",
    "description": "<p>Evaluates relevant scope varible to check if ingridients are grouped.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipeController.$scope.recipe",
    "$href": "module:uiServices.recipeController.$scope.recipe",
    "$id": "T000002R000093"
  },
  {
    "kind": "event",
    "name": "GET",
    "type": {
      "names": [
        "XHTTPrequest"
      ]
    },
    "memberof": "module:uiServices.recipeController.$scope.recipe",
    "description": "<p>Fetch the list of recipes and inisialize $scope.recipes.data.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipeController.$scope.recipe.event:GET",
    "$href": "module:uiServices.recipeController.$scope.recipe#GET",
    "$id": "T000002R000095"
  },
  {
    "kind": "event",
    "name": "goToIndex",
    "type": {
      "names": [
        "$location"
      ]
    },
    "memberof": "module:uiServices.recipeController.$scope",
    "description": "<p>Redirects to index.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipeController.$scope.event:goToIndex",
    "$href": "module:uiServices.recipeController.$scope#goToIndex",
    "$id": "T000002R000098"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "controller"
      ]
    },
    "name": "recipiesController",
    "memberof": "module:uiServices",
    "description": "<p>Controller of recipes page</p>",
    "requires": [
      "module:$scope",
      "module:$filter",
      "module:GET+module:api.GET",
      "module:pagination+module:features.pagination",
      "module:SERVER_MESSAGE+module:api.SERVER_MESSAGE",
      "module:SERVER_PATHS+module:api.SERVER_PATHS",
      "module:errorHandler+module:uiServices.errorHandler"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.recipiesController",
    "jsConcept": true,
    "$href": "module:uiServices.recipiesController",
    "$id": "T000002R000100"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.recipiesController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope",
    "$href": "module:uiServices.recipiesController.$scope",
    "$id": "T000002R000101"
  },
  {
    "kind": "class",
    "name": "recipes",
    "memberof": "module:uiServices.recipiesController.$scope",
    "description": "<p>Encapsulates recipes scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes",
    "$href": "module:uiServices.recipiesController.$scope.recipes",
    "$id": "T000002R000102"
  },
  {
    "kind": "member",
    "name": "orderBy",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.recipiesController.$scope.recipes",
    "description": "<p>Stores Order of the recipes.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes.orderBy",
    "$href": "module:uiServices.recipiesController.$scope.recipes#orderBy",
    "$id": "T000002R000104"
  },
  {
    "kind": "member",
    "name": "search",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.indexController.$scope.recipes",
    "description": "<p>Stores search query.</p>",
    "scope": "static",
    "longname": "module:uiServices.indexController.$scope.recipes.search",
    "$href": "#search",
    "$id": "T000002R000106"
  },
  {
    "kind": "member",
    "name": "search",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.recipiesController.$scope.recipes",
    "description": "<p>Stores s.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes.search",
    "$href": "module:uiServices.recipiesController.$scope.recipes#search",
    "$id": "T000002R000108"
  },
  {
    "kind": "event",
    "name": "GET",
    "type": {
      "names": [
        "XHTTPrequest"
      ]
    },
    "memberof": "module:uiServices.recipiesController.$scope.recipes",
    "description": "<p>Fetch the list of recipes and inisialize $scope.recipes.data.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes.event:GET",
    "$href": "module:uiServices.recipiesController.$scope.recipes#GET",
    "$id": "T000002R000110"
  },
  {
    "kind": "member",
    "name": "readMore",
    "memberof": "module:uiServices.recipiesController.$scope.recipes",
    "params": [
      {
        "type": {
          "names": [
            "args"
          ]
        },
        "name": "no-arguments"
      }
    ],
    "description": "<p>When user selects read more pagination is trigered to update  <code>$scope.recipes.data</code>\nInvokes pagination <a href=\"#!/module:features\"><code>showNextPage</code></a>.\nInvokes filter <a href=\"#!/module:features.searchKeyWord\"><code>searchKeyWord</code></a> if search is active.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes.readMore",
    "$href": "module:uiServices.recipiesController.$scope.recipes#readMore",
    "$id": "T000002R000113"
  },
  {
    "kind": "member",
    "name": "setOrder",
    "memberof": "module:uiServices.recipiesController.$scope.recipes",
    "params": [
      {
        "type": {
          "names": [
            "arguments"
          ]
        },
        "name": "no-arguments"
      }
    ],
    "description": "<p>When user selects displayed order, data are filtered according to user input, and pagination is updated.\nInvokes pagination <a href=\"#!/module:features\"><code>showNextPage</code></a> .<br>Invokes filter <a href=\"#!/module:features.searchKeyWord\"><code>searchKeyWord</code></a> if search is active.\nInvokes pagination <a href=\"#!/module:features\"><code>update</code></a>.</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes.setOrder",
    "$href": "module:uiServices.recipiesController.$scope.recipes#setOrder",
    "$id": "T000002R000117"
  },
  {
    "kind": "member",
    "name": "searchKeyword",
    "memberof": "module:uiServices.recipiesController.$scope.recipes",
    "params": [
      {
        "type": {
          "names": [
            "arguments"
          ]
        },
        "name": "no-arguments"
      }
    ],
    "description": "<p>When user types a search keyword, searh filter updates <code>$scope.recipes.data</code> and then thepagination\nInvokes filter <a href=\"#!/module:features.searchKeyWord\"><code>searchKeyWord</code></a>.\nInvokes filter <a href=\"#!/module:features.shortArray\"><code>shortArray</code></a>.\nInvokes pagination <a href=\"#!/module:features\"><code>update</code></a> .</p>",
    "scope": "static",
    "longname": "module:uiServices.recipiesController.$scope.recipes.searchKeyword",
    "$href": "module:uiServices.recipiesController.$scope.recipes#searchKeyword",
    "$id": "T000002R000122"
  },
  {
    "kind": "member",
    "name": "back",
    "memberof": "module:uiServices.indexController.$scope.recipes",
    "params": [
      {
        "type": {
          "names": [
            "arguments"
          ]
        },
        "name": "no-arguments"
      }
    ],
    "description": "<p>After user search for recepies back button appears. On click trigers\nThe Back function\nInitialize  <code>search</code>\nInitialize  <code>recipes</code></p>",
    "scope": "static",
    "longname": "module:uiServices.indexController.$scope.recipes.back",
    "$href": "#back",
    "$id": "T000002R000126"
  },
  {
    "kind": "member",
    "name": "buildUrl",
    "memberof": "module:uiServices.indexController.$scope.recipes",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "name"
      }
    ],
    "description": "<p>As there are no specs and I had to create dynamic links, There was a pattern between indevidual recipies names and the relavant json files name.\nThe regex turn string to lower case and replaces: \n' -&gt;  &quot;&quot;\n&quot; &quot; -&gt; -</p>",
    "scope": "static",
    "longname": "module:uiServices.indexController.$scope.recipes.buildUrl",
    "$href": "#buildUrl",
    "$id": "T000002R000130"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "errorHandler",
    "memberof": "module:uiServices",
    "description": "<p>If given array is empty  or undefined returns given error message.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.errorHandler",
    "jsConcept": true,
    "$href": "module:uiServices.errorHandler",
    "$id": "T000002R000132"
  },
  {
    "kind": "function",
    "name": "checkIfArrayOfDataRecived",
    "memberof": "module:uiServices.errorHandler",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "data"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "message"
      }
    ],
    "scope": "static",
    "description": "<p>If given array is empty  or undefined $emit to main Controller the given message.\nUsage: \nerrorHandler.checkIfArrayOfDataRecived([with data], message) nothing happends\nerrorHandler.checkIfArrayOfDataRecived([], message) error message appended            * errorHandler.checkIfArrayOfDataRecived([], null) error message disapears</p>",
    "longname": "module:uiServices.errorHandler.checkIfArrayOfDataRecived",
    "$href": "module:uiServices.errorHandler#checkIfArrayOfDataRecived",
    "$id": "T000002R000134"
  }
]);})();