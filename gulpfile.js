/*jslint browser: true, devel: true, plusplus: true, unparam: true, vars: true, white: true*/
/*global require*/

(function() {

    'use strict';

    // Gulp
    // ------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------
    var gulp = require('gulp');

    // Importing Gulp dependencies
    // ------------------------------------------------------------------------------------------------------
    var
        less        = require('gulp-less'),
        minifyCSS   = require('gulp-minify-css'),
        jshint      = require('gulp-jshint');

    // Source paths
    // ------------------------------------------------------------------------------------------------------
    var assets  = 'assets/';

    // Tasks configuration
    // ------------------------------------------------------------------------------------------------------
    var tasks = {
        'js': {
            source: assets +'js/home.js'
        },
        'less_main': {
            source: assets +'less/*.less',
            dest:   assets +'css/'
        }
    };

    // Javascript
    // ------------------------------------------------------------------------------------------------------
    gulp.task('js_lint', function() {

        return gulp
            .src(tasks.js.source)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));

    });

    // LESS/CSS
    // ------------------------------------------------------------------------------------------------------
    gulp.task('less_main', function() {

        return gulp
            .src(tasks.less_main.source)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(gulp.dest(tasks.less_main.dest));

    });

    // Watching files
    // ------------------------------------------------------------------------------------------------------
    gulp.task('watch', function() {

        // Javascript
        // --------------------------------------------------------------------------------------------------
        gulp.watch(tasks.js.source, ['js_lint']);

        // LESS main
        // --------------------------------------------------------------------------------------------------
        gulp.watch(tasks.less_main.source, ['less_main']);

    });

    // Default tasks (called when running `gulp` from cli)
    // ------------------------------------------------------------------------------------------------------
    gulp.task('default', [
        'js_lint',
        'less_main',
        'watch'
    ]);

}());
