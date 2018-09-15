const fs = require('fs');

var obj = {
		name : 'andrew'
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name":"James", "age": 85}';  //ceci est un json et non un object key/value
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); 

var originalNote = {
	title:'some title',
	body:'some body'
};

var originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);

//ecrire le contenu dans un fichier sous forme de json
fs.writeFileSync('note.json', originalNoteString);

//lire le contenu
var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);

console.log(note);
console.log(note.title);