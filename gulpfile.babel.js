import gulp from 'gulp';
import gutil, {PluginError} from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';

import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import assign from 'object-assign';
import del from 'del';

gulp.task('copy', () => {
  return gulp.src( ['src/index.html'] )
             .pipe( gulp.dest('public') );
});

gulp.task('build', ['copy'], () => {
  const b = browserify('src/index.js', { debug: true })
            .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify('src/index.js', assign({ debug: true }, watchify.args))
            .transform(babelify);
  const w = watchify(b)
            .on('update', () => bundle(w))
            .on('log', gutil.log);
  return bundle(w);
});

gulp.task('clean', () => del('public'));
gulp.task('default', ['copy', 'watch']);

function bundle(ifier) {
  return ifier.bundle()
              .on('error', (e) => {
                console.error(e.stack);
              })
              .pipe(source('bundle.js'))
              .pipe(buffer())
              .pipe(sourcemaps.init({ loadMaps: true }))
              .pipe(sourcemaps.write('./'))
              .pipe(gulp.dest('public'));
}
