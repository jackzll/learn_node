var fs=require('fs');

var txt=new Buffer('这是个文件');
function write(fName,data){
	fs.writeFile(fName,data,'utf8',function(err){
		err&&console.log(err)||fs.open()
	});
}
function createDir(folderName,fname,data){
	fs.mkdir(__dirname+"/dist/",function(err){
		if(err){
			console.log(err);
		}else if(data){
			write(folderName+fname,data);
		}else{
			console.log('dist folder is created');
		}
	});
}
fs.readdir(__dirname+'/lib/',function(err,files){
	var curFileFolder=__dirname+'/lib/';
	if (err){
		console.log(err);
	}else{
		files.forEach(function(el) {
			fs.stat(curFileFolder+el,function(error,stat){
				console.log(`${el} size is ${(stat.size/1024).toFixed(2)}kb`);
			})
			fs.readFile(curFileFolder+el,'utf8',function(er,data){
					er&&console.log(er)||data&&write(__dirname+"/dist/",el,new Buffer(data));
			})

		});

	}
})
// createDir(__dirname+"/dist/",'txt.txt',txt);
//fs.stat获取文件信息
// var file=fs.stat('./app',function(err,stat){
// 	err&&console.log(err)||console.log(stat.isFile())
// });




