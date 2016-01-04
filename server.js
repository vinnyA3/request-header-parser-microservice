var express = require('express'),
    config = require('./config.js'),
    app = express();

//configuration to handle CORS requests
app.use(function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Methods','GET');
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type, /Authorization');
   next();
});

//root route
app.get('/',function(req,res){
    console.log(process);
    res.send(JSON.stringify({
                ipaddress: req.headers['x-forwarded-for'] ||  req.connection.remoteAddress,
                language: process.env.LANG,
                software: process.platform
            }, null, 4));
});

//listen on port
app.listen(config.port, function(){
   console.log('Listening on port: ' + config.port); 
});