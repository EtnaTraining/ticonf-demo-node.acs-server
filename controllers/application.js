
var polls = require('../models/polls').polls;

function index(req, res) {
	console.log(polls[0].values);
	//console.log(JSON.stringify(polls));
	res.header("Access-Control-Allow-Origin", "*");
	res.json(polls);
	//res.render('index', { title: 'Welcome to Node.ACS!' });
}


function vote(req, res) {
	//console.log(req.params.id_question);
	//console.log(req.params.id_answer);
	//console.log(polls.length);
	//console.log(polls[req.params.id_question].answers.length);
	if (req.params.id_question < polls.length && req.params.id_answer < polls[req.params.id_question].answers.length) {
		polls[req.params.id_question].values[req.params.id_answer]++;
	}
	res.json(polls);
}
