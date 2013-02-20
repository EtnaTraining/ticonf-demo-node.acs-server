
var polls = require('./models/polls');

//console.log(io);

// initialize app
function start(app, express) {
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));	//set favicon
	//console.log(app);
	//console.log(express);
}

// release resources
function stop() {
	
}
