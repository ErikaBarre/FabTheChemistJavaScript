console.log('Starting notes.js');

//note app.js add --title:secret --body="some body here"

//const fd = require('fs');

var addNote = (title, body) => {
	var notes = [];
	//selon la syntaxe ES6 puisque cle valeur ont le meme identifiant
	var note = {
		title,
		body
	};
	var noteString = fs.readFileSync('note-data.json');
	notes.push(note);
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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


