var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var services = loadServices();

var httpd = express();

httpd.use(bodyParser.json());

httpd.post('/service/*', function(req, res) {
    console.log(req.path);

    var service = req.path.substring(
        req.path.lastIndexOf('/') + 1,
        req.path.length);

    console.log('Invoking: ' + service);

    services[service].post(req, res);
});

httpd.get('/service/*', function(req, res) {
    console.log(req.path);

    var service = req.path.substring(
      req.path.lastIndexOf('/') + 1,
      req.path.length);

    console.log('Invoking: ' + service);

    services[service].get(req, res);
});

httpd.get('/*', function(req, res) {
    var filePath = './webroot' + req.path;
    console.log(filePath);

    fs.exists(filePath, function(exists) {
        if(exists) {
            res.sendfile(filePath);
        } else {
            res.status(404).sendfile('./errors/404.html');
        }
    });
});

var server = httpd.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

function loadServices() {
    console.log('Loading services');

    var servicesObject = new Object();

    var files = fs.readdirSync('./service');

    for(var i = 0; i < files.length; i++) {
        var filename = files[i];
        var service = filename.substring(0, filename.indexOf('.'));

        console.log('Loading service "' + service + '" from [' + filename + ']');

        servicesObject[service] = require('./service/' + filename);
    }

    return servicesObject;
}