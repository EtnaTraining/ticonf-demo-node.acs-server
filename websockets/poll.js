var polls = require('../models/polls').polls;


function pollChoice(data, socket) {
	console.log(data);
	//console.log(socket);
	console.log("# of client connected: " + socket.manager.rooms[''].length );
	if (data.question < polls.length && data.answer < polls[data.question].answers.length) {
		polls[data.question].values[data.answer]++;
		socket.broadcast.emit('results', {	
			"question": data.question, 
			"answer": data.answer, 
			"votes": polls[data.question].values[data.answer]
		});
	}
}


