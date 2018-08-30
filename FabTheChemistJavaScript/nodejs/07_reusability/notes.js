console.log('Starting notes.js');

//réutiliser le code s'effectue par les fonctions
// on reprend le 06_json et on récrit différent

const fs = require('fs');

var fetchNodes = () => {
	try{
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	}catch(exception){
		console.log('nL23');
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	
};

var addNote = (title, body) => {
	
	var notes = fetchNodes();
	
	var note = {
		title,
		body
	};
	
	
	var duplicateNotes = notes.filter((note) => note.title === title); 
	console.log('nL34', duplicateNotes);
	if(duplicateNotes.length === 0){
		console.log('L35');
		notes.push(note);
		saveNotes(notes);
	}
} ;

var getAll = () => {
	console.log('get all notes');
} ;

var getNoteAll = (title) => {
	console.log('get note :' , title);
} ;

var removeNote = (title) => {
	console.log('remove note :' , title);
} ;

module.exports = {
	addNote,
	getAll,
    getNoteAll,
    removeNote
};


