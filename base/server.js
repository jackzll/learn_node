var http=require('http');
var url=require('url');
var query=require('querystring');
var route=require('./router.js');
if(process.env.NODE_ENV=='DEV'){
	console.log('dev---------------------');
}else{
	console.log('not dev--------------------');
}
// var testStr="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=node%20%E6%A8%A1%E5%9D%97%E5%8F%91%E5%B8%83&oq=node%2520%25E6%258F%2590%25E5%258F%2596%25E5%258F%2582%25E6%2595%25B0&rsv_pq=e28176fe00005e1f&rsv_t=132ewtBAAFOrkOejzCbAEIdgyJ%2FASCOMKIiBE2In3OJoJVY%2BfnSaegeOtzc&rqlang=cn&rsv_enter=1&rsv_sug3=22&rsv_sug1=12&rsv_sug7=100&bs=node%20%E6%8F%90%E5%8F%96%E5%8F%82%E6%95%B0"
// var qs=url.parse(testStr).query;
// var c=query.unescape(qs);
// console.log(query.parse(c));


http.createServer(function(req,response){
	if(req.url!="/favicon.ico"){
		var queryStr=url.parse(req.url).query;
		// var pathName=url.parse(req.url).pathname;
		var querys=query.parse(queryStr);
		console.log(querys);
		// route.route(pathName);
	}
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(c);
	response.end();
}).listen(8888);
console.log('-----------server listen on 8888--------');