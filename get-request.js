var request = require('request');
var fs = require('fs');
//request('https://sytantris.github.io/http-examples/', function(err, response, body)
request.get('https://sytantris.github.io/http-examples/future.jpg')
		.on('error', function (err) {
			throw err;
		})

		.on('response', function (response) {
			console.log('Response Status Code: ', response.statusMessage, response.headers['content-type']);
			
		})
		.pipe(fs.createWriteStream('./future.jpg'));
		console.log('Download complete.')

		// response.on('end', function() {
  //   	console.log('Download complete.');