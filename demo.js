var fs=require('fs')
var dirName=process.argv[2]
var flag=fs.existsSync("./"+dirName)  //文件存在则为true，反之为false
if(flag){
	console.log("error: dir exists")
	process.exit(1)
}else{
	fs.mkdirSync("./"+dirName)
	process.chdir("./"+dirName)
	fs.mkdirSync('css')
	fs.mkdirSync('js')
	fs.writeFileSync("./index.html","<!DOCTYPE>\n"+
		"<title>Hello</title>\n"+
		"<h1>Hi</h1>")
	fs.writeFileSync("css/sytle.css","h1{color:red;}")
	fs.writeFileSync("js/main.js",'var string = "Hello World"\n'+
		'alert(string)')
	console.log("success")
	process.exit(0)
}

