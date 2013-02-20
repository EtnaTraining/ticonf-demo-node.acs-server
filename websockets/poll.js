var polls = require('../models/polls').polls;




function pollChoice(data, socket) {
	console.log(data);
	if (data.question < polls.length && data.answer < polls[data.question].answers.length) {
		polls[data.question].values[data.answer]++;
		socket.broadcast.emit('results', {	
			"question": data.question, 
			"answer": data.answer, 
			"votes": polls[data.question].values[data.answer]
		});
	}
	//socket.emit('preference', data);
  	//socket.broadcast.emit('preference', data);
  	
  	//console.log(data);
}