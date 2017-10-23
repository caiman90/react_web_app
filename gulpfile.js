"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs local dev server
var open = require('gulp-open');  // Open URL in the browser
var browserify = require('browserify'); // bundle js files
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // use text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files
var lint = require('gulp-eslint'); // Lint js files,jsx included
var LiveServer = require('gulp-live-server');

// CONFIG

var config = {
    port:3000,
    devBaseUrl:'http://localhost',
    paths:{
        html:'./src/*.html',
        dist:'./dist',
        css: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        js:'./src/**/*.js',
        images:'./src/images/*',
        mainJs:'./src/main.js'
    }
};

// start a local development server

gulp.task('live-server',function () {
    var server = new LiveServer(__dirname + '/server.js');
    server.start();
});

gulp.task('open',function(){
    gulp.src('dist/index.html')
        .pipe(open({uri : config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html',function () {
   gulp.src(config.paths.html)
       .pipe(gulp.dest(config.paths.dist))
       .pipe(connect.reload());
});

gulp.task('js',function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error',console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload())
});

gulp.task('css',function () {
    gulp.src(config.paths.css).
        pipe(concat('bundle.css')).
        pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('images',function () {
    return gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch(config.paths.html,['html']);
    gulp.watch(config.paths.js,['js','lint']);
});

gulp.task('lint',function () {
    return gulp.src(config.paths.js)
        .pipe(lint({config:'eslint.config.json'}))
        .pipe(lint.format());

});
gulp.task('default',['live-server','html','js','css','images','lint','watch','open']);