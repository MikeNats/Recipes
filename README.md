# Recipes
# Recipes

The development environment of the app is consisted from the below folders:

    Documentation
    Contains a mini SPA App that has all the JavaScript-Angular documentation, producted dynamically from the comments that are been placed in the code. More about the automated documentation app can be found in my github https://github.com/MikeNats/ng-docs.

    bower_components
    Contains all the necessary files for foundation.

    css
    Contains the minified development version of the css. Its been produces dynamical from automated build that are defined to Grunt.js file.

    js
    Contains the JavaScripts for the development environment.

    scss
    Contains the SASS files.

    node_modules
    Contains the node modules that are needed from the Grunt to implement the automated builds

    view
    Contains the views of the App. In the development environment make use of unminified version.

    Grunt.js
    Task manager for automated builds

    index.html
    The index page of the app.

    app
    Contains the minified version of the app. The folder is been updated dynamical from automated build that are defined to Grunt.js file. All the files of the app are been included automatically from the development environment to that folder. That folder should be then uploaded in the server as it is for the up to run.


Grunt

The Development environment of the app is been automated with Grunt.
Every time that a change is been applied, Grunt will validated the code, minified and extract the resulted app into the app folder.
Before any change is been applied to the development files, Grunt must be triggered.

To triger Grunt open CMD:

cd pathToTheDevelopmentStack

grunt watch

Grunt Taks

    minifyHtml: Compress html
    sass: Compiles Compress and consolidate into one folder all the sass files
    jshint: Validation of all js files
    glify: Compress and consolidate into one folder all the js files
    watch: When a file is changed and saved runs all the above tasks
