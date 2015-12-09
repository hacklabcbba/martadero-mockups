module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Project configuration.
  grunt.initConfig({
    less: {
      development: {
        options: {
          sourceMap: true,
          sourceMapFilename: 'css/style.css.map', // where file is generated and located
          sourceMapURL: '/martadero-mockups/html-css-js/css/style.css.map', // the complete url and filename put in the compiled css file
          sourceMapRootpath: '/martadero-mockups/html-css-js/' // adds this path onto the sourcemap filename and less file paths
        },
        files: {
          'css/styles.css': 'css/styles.less'
        }
      }
    },
    watch: {
      less: {
        files: ['css/styles.less'],
        tasks: ['less:development'],
        options: {
          spawn: true
        }
      }
    }
  });
};

