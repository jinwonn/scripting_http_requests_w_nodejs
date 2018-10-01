var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {
    
    response.setEncoding('utf8');
    var buffered = "";    
    
    response.on('data', function (data) {
      buffered += data;

    });

    response.on('end', function() {
      console.log(buffered);
    });
  })
}
getAndPrintHTML()