var gulp = require("gulp");
var s3 = require("gulp-awspublish");

// var aws = {
// 	"key": process.env.AWS_KEY,
// 	"secret": process.env.AWS_SECRET,
// 	"bucket": process.env.AWS_BUCKET,
// 	"region": process.env_AWS_REGION
// };


gulp.task("deploy", function() {

	console.log(process.env.AWS_REGION);
	console.log(process.env.AWS_KEY);
	console.log(process.env.AWS_SECRET);


	var publisher = s3.create({
		accessKeyId: process.env.AWS_KEY,
		secretAccessKey: process.env.AWS_SECRET,
		region: process.env.AWS_REGION,
		params: {
			Bucket: process.env.AWS_BUCKET
		}
	});

	var headers = {
    'Cache-Control': 'max-age=0, no-transform, public'
  };

  return gulp.src(['./*.js', './*.html'])
     // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(s3.reporter());
});
