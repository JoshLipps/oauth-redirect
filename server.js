var express = require('express');
var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.get('/authorization', function(req, res){
  var redirectTo = req.query.redirect_uri + '?state=' + req.query.state + '&code=authcode1234';
  console.log('Redirecting to '+ redirectTo);
  res.redirect(redirectTo);
});

app.post('/token', function(req, res){
  console.log('Token Post Recieved');
  res.json({refresh_token: 'refresh_token_response'});
});

// app.listen(5000);

function run(port){
  app.listen(5000);
}

module.export.run = run()
