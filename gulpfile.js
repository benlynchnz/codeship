var gulp = require("gulp");
var s3 = require("gulp-s3");
var fs = require("fs");

var aws = {
	"key": process.env.AWS_KEY,
	"secret": process.env.AWS_SECRET,
	"bucket": process.env.AWS_BUCKET,
	"region": process.env_AWS_REGION
};


gulp.task("deploy", function() {
	gulp.src("./index.html")
	.pipe(s3(aws));	
});
