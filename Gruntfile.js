/**
 * Created by vinside on 5/11/16.
 */

module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['sass']);
    //Current project tasks
    grunt.registerTask('start', ['clean', 'copy', 'sass', 'includereplacemore',
        'express', 'open', 'watch']);
};