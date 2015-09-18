module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Compress html
    minifyHtml: {
        options: {
            cdata: true,
            comments:false
        },
        my_target: {
            files: {
                'index.html': 'index.html',
                'app/index.html': 'index.html',
                
                'views/recipesPage.html': 'views/unMinified/recipesPage.html',
                'app/views/recipesPage.html': 'views/unMinified/recipesPage.html', 
                
                'views/recipes-Slot.html': 'views/unMinified/recipes-Slot.html',   
                'app/views/recipes-Slot.html': 'views/unMinified/recipes-Slot.html',
                
                'views/logo-Slot.html': 'views/unMinified/logo-Slot.html',
                'app/views/logo-Slot.html': 'views/unMinified/logo-Slot.html', 
 
                'views/orderBy-Slot.html': 'views/unMinified/orderBy-Slot.html',
                'app/views/orderBy-Slot.html': 'views/unMinified/orderBy-Slot.html',
                
                'views/search-Slot.html': 'views/unMinified/search-Slot.html',
                'app/views/search-Slot.html': 'views/unMinified/search-Slot.html',             
                                
                'views/recipePage.html': 'views/unMinified/recipePage.html',
                'app/views/recipePage.html': 'views/unMinified/recipePage.html', 
				
				                                
                'views/recipe-Slot.html': 'views/unMinified/recipe-Slot.html',
                'app/views/recipe-Slot.html': 'views/unMinified/recipe-Slot.html', 
            } 
        }
    },
 
 
    //Compiles Compress and consolidate into one folder all the sass files
    sass: { 
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      my_target: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
          'app/css/app.css': 'scss/app.scss'
        }           
      }  
    },



 
    //Validation of all js files
    jshint: {
      all: [ 'js/app/**/*.js'],
              tasks: ['jshint']

   },

    //Compress and consolidate into one folder all the js files
    uglify: {
      options: {
          compress: false,
         // beautify : false,
          //sourceMap : false,
          report: 'zip'// 'gzip'
      }, 
      my_target: {
        files: {  
          'js/all.min.js':  
          [
            'js/lybs/angular.min.js',
            'js/lybs/angular-animate.js',
            'js/lybs/angular-route.min.js', 
            'js/lybs/router-ui.js', 
            'bower_components/modernizr/modernizr.js',
            'js/app/data/apiResponse.js', 
            'js/app/ui/module.js',
            'js/app/ui/services/controllers/recipes-Controller.js',
            'js/app/ui/services/controllers/recipe-Controller.js',          
            'js/app/ui/services/controllers/main-App-Controller.js',
	        'js/app/ui/services/factories/errorHandler.js',		    
            'js/app/api/module.js',          
            'js/app/api/services/factories/get.js',
            'js/app/api/services/constants/messages.js',
            'js/app/api/services/constants/serverPaths.js',			  
            'js/app/features/module.js',
            'js/app/features/orderBy/filters/shortArray.js',
            'js/app/features/search/filters/search.js',                 
            'js/app/features/pagination/factories/pagination.js',  
            'js/app/app.js',          
          ], 
          'app/js/all.min.js': 
          [
            'js/lybs/angular.min.js',
            'js/lybs/angular-animate.js',
            'js/lybs/angular-route.min.js', 
            'js/lybs/router-ui.js', 
            'bower_components/modernizr/modernizr.js',
            'js/app/data/apiResponse.js', 
            'js/app/ui/module.js',
            'js/app/ui/services/controllers/recipes-Controller.js',
            'js/app/ui/services/controllers/recipe-Controller.js',
            'js/app/ui/services/controllers/main-App-Controller.js',
	        'js/app/ui/services/factories/errorHandler.js',		    
            'js/app/api/module.js',          
            'js/app/api/services/factories/get.js',
            'js/app/api/services/constants/messages.js',
            'js/app/api/services/constants/serverPaths.js',			  
            'js/app/features/module.js',
            'js/app/features/orderBy/filters/shortArray.js',
            'js/app/features/search/filters/search.js',                 
            'js/app/features/pagination/factories/pagination.js',  
            'js/app/app.js',           
          ] 
        }
      }
    },
 


    //When a file is changes runs all the above tasks
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

     jshint: {
       files: 'js/app/**/*.js',
       tasks: ['jshint']
    },


      uglify:{
        files: 'js/**/*.js',
        tasks: ['uglify']
      },

      minifyHtml:{
        files: '**/*.html',
        tasks: ['minifyHtml']
      },
                   




    } 
  });

  grunt.loadNpmTasks('grunt-minify-html');
  grunt.loadNpmTasks('grunt-sass');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['watch','uglify','minifyHtml','jshint']); 

}