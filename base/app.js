process.env.NODE_ENV='DEV';
var env=process.env.NODE_ENV;
if(env==='DEV'){
	console.log('开发环境');
}

// module.exports={
// 	env:env
// } ;
exports.name="app.js";
exports.dir=__dirname; 