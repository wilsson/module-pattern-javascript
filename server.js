/*
 *
 * server 
 *
 */
 
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname+'/demo');
app.use(express.static(__dirname+'/demo'));

app.get('/',function(req,res){
  res.render('index');
});

app.listen(4000,function(){
  console.log('server ready!');
});