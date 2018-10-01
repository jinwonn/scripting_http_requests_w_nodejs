module.exports = function getHTML (options, callback) {
  var https = require('https');  
  https.get(options, function (response) {
    
    response.setEncoding('utf8');

    var html = "";    
    
    response.on('data', function (data) {
      html += data;
    });

    response.on('end', function () {
    return printHTML(html);
    });
  });
  function printHTML (html) {
    console.log(html);
  }
};