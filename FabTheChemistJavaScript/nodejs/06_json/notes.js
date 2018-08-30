console.log('Starting notes.js');

//lancer les 2 commandes successive et voir le résultat entre chaque
//node app.js add --title:secret --body="some body here"
//node app.js add --title:secret2 --body="some body here"


const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	//selon la syntaxe ES6 puisque cle valeur ont le meme identifiant
	var note = {
		title,
		body
	};
	try{ //try catch au cas où le fichier n'existe pas avant la lecture
		var noteString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(noteString);
	}catch(exception){
			
	}
	//on va vérifier qu'on insère pas 2 fois les memes informations dans le fichier
	var duplicateNotes = notes.filter((note) => note.title === title); //pour rappel : pas de ; dans l'instruction de la fonction quand il y a qu'une instruction
	if(duplicateNotes.length === 0){
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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


