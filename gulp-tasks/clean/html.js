var clean = require('gulp-clean');

module.exports = function(gulp, callback) {
	return gulp.src(config.html + '/' + myTextDirection + '/**/*.html', {
			read: false
		})
		.pipe(clean());
};