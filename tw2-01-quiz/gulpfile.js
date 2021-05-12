const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-01
 * 
 */

function moveFiles(){
  return src('./build/**/*.*')
  .pipe(dest('../tw2-01'))
}

function watchTask(){
  watch('./build/*.*');
}

//default gulp
exports.default = series(moveFiles, watchTask);