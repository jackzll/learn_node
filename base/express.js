var express=require('express');
var path=require('path');
var app=express();
console.log(path.join(__dirname,'/name.txt'));
app.get('/',function(req,res){
	path.join(__dirname,'/name.txt');
	res.sendFile(path.join(__dirname,'/a.html'));
	console.log(req.query);
})
var server=app.listen(8081,function(){
	var host=server.address().address
	var port=server.address.port
	console.log(host);
})