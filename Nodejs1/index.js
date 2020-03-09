var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response) {
    response.send("Hello World !");
});

app.get('/user', function(request, response) {
    response.send("User List Empty !");
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
})