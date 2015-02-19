var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var react = require( 'gulp-react' );
var concat = require( 'gulp-concat' );
var sourcemaps = require( 'gulp-sourcemaps' );
var filter = require( 'gulp-filter' );
var rename = require( 'gulp-rename' );

gulp.task( 'connect', function() {
  connect.server();
});

gulp.task( 'compile', function () {
  var jsxFilter = filter( '*.jsx' );
  return (
    gulp
      .src([
        'lib/ext/**/*.js',
        'lib/app/**/*.jsx',
        'lib/boot.js'
      ])
      .pipe( jsxFilter )
      .pipe( react() )
      .pipe( jsxFilter.restore() )
      .pipe( sourcemaps.init() )
      .pipe( concat( 'all.js' ) )
      .pipe( sourcemaps.write() )
      .pipe( gulp.dest( 'assets' ) )
  );
});

gulp.task( 'vendor', function() {
  return (
    gulp
      .src([
        'node_modules/react/dist/react.js',
        'node_modules/type/dist/type.js',
        'node_modules/lodash/index.js'
      ])
      .pipe(
        rename( function( path ) {
          if ( path.basename === 'index' ) {
            path.basename = 'lodash';
          }
          return path;
        })
      )
      .pipe( gulp.dest( 'assets/vendor' ) )
      .pipe( sourcemaps.init() )
      .pipe( concat( 'vendor.js' ) )
      .pipe(
        sourcemaps.write( '.', {
          includeContent: false,
          sourceRoot: '/assets/vendor'
        })
      )
      .pipe( gulp.dest( 'assets' ) )
  );
});

gulp.task( "watch", [ "compile" ], function() {
  connect.server();
  gulp.watch([ "lib/**/*" ], [ "compile" ]);
});

gulp.task( 'default', [ 'connect' ] );
