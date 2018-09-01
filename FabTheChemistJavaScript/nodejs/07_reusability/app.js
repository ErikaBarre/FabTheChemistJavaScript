console.log('starting app');

//node app.js add --title="to buy" --body="food"
//node app.js remove --title="secret" --body="ff"

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
	console.log('add');
    var note =notes.addNote(argv.title, argv.body);
    if(note){
    if(note === 'ERROR_SAVE'){
        console.log('Error during save');
    }else if (note === 'DUPLICATED_DATA'){
        console.log('note already exists');
    }else{
        console.log(`Note saved in file`);
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    }}else{
         console.log('note is undefined')
    }
}else if(command == 'list'){
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} notes `);
    allNotes.forEach((note) => note.logNote());
    
}else if(command == 'read'){
	var note = notes.getNote(argv.title);
    if(note){
        console.log('note found');
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    }else{
        console.log('note not found');
    }
}else if(command == 'remove'){
	var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'removed' : 'not removed';
    console.log(message);
}else{
	console.log('other');
}
