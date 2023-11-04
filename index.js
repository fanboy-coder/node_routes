const http = require("http");
const fs = require('fs')

const server = http.createServer((req,res) => {

	res.setHeader("Content-Type","text/html")

	//routing system
	let html_file = '';
	switch (req.url) {
		case "/": 
			html_file = './views/index.html'
			res.statusCode = 200;
			break;
		case '/about':
			html_file = './views/about.html'
			res.statusCode = 200;
			break;
		case '/contact-me':
			html_file = './views/contact-me.html'
			res.statusCode = 200;
			break;
		default:
			html_file= './views/404.html'
			res.statusCode = 404;
			break;
	}

	fs.readFile(html_file, (err, data) => {
		if(err) {
			console.log("erro")
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	})

});

server.listen(8080, "localhost", ()=> {
	console.log("Server started")
});