console.log('starting app');

const fs 	= require('fs');
//const _ 	= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv ;
var command = process.argv[2];

var command0 = argv._[0];



var argume = yargs.argv._ ;
console.log(argume);

//yards offre une facilité plus grande sur la récupération des paramètres que "process"
if(argume.indexOf('add') > -1){
    console.log('add yargs');
}


if(command == 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command == 'list'){
    console.log(notes.getAll());
}else if(command == 'read'){
	console.log(notes.getNoteAll(argv.title));
}else if(command == 'remove'){
	console.log(notes.removeNote(argv.title));
}else{
	console.log('other');
}
