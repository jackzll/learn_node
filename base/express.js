var express=require('express');
var path=require('path');
var app=express();
var bodyParser=require('body-parser');
let rootDir=__dirname;
app.use(bodyParser.urlencoded({
	extended:false
}))
//配置首页
let indexHTML=path.join(rootDir,'../web/index.html')
// 配置虚拟目录和静态资源文件夹
app.use('/static',express.static(path.join(rootDir,'../web/')))
// app.use(express.static(path.join(rootDir,'../web/')))

// 访问路由
app.get('/',function(req,res){
	res.sendFile(indexHTML);
	console.log(req.query);
})
app.post('/userInfo',function(req,res){
	console.log(req.body);
	const{username}=req.body;
	res.json({
		status:"success",
		name:username
	});
})
var server=app.listen(8081,function(){
	var host=server.address().address
	var port=server.address.port
	console.log(host);
})