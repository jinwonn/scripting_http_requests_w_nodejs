function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');
  
  https.get(options, function (response) {
    
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


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)