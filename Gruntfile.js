/**
 * Created by vinside on 5/11/16.
 */

module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        clean: ['build/*'],

        copy: {
            files: {
                expand: true,
                cwd: 'src',
                src: [
                    'images/**/*',
                    'javascripts/**/*',
                    'vendor/jquery/dist/jquery.min.js'
                ],
                dest: 'build/',
                file: 'isFile'
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true
                },
                files: {
                    'build/stylesheets/style.min.css' : 'src/sass/main.scss',
                }
            }
        },

        includereplacemore: {
            dev: {
                options: {
                    includesDir: 'src/html'
                },
                expand: true,
                cwd: 'src/html',
                src: '*.html',
                dest: 'build/'
            }
        },

        express: {
            all: {
                options: {
                    hostname: 'localhost',
                    port: 9999,
                    bases: 'build'
                }
            }
        },

        open: {
            dev: {
                path: 'http://localhost:9999',
                app: '/usr/bin/google-chrome'
            }

        },

        watch: {
            configFiles: {
                files: [
                    'src/html/**/*',
                    'src/images/**/*',
                    'src/javascripts/**/*',
                    'src/sass/**/*'
                ],
                tasks: ['copy', 'sass', 'includereplacemore'],
                options: {
                    livereload: true
                }
            }
        }
    });

    //Default task(s).
    grunt.registerTask('default', ['sass']);

    //Current project tasks
    grunt.registerTask('start', ['clean', 'copy', 'sass', 'includereplacemore',
        'express', 'open', 'watch']);
};