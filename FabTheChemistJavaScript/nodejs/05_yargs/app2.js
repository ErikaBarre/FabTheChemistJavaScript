console.log('starting app');

const fs 	= require('fs');
//const _ 	= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//usage de command, permet de passer les argument dans le code plutot que par commande dans la console
//help : méthode qui va nous retournez des information utile . Quand on ecrira node app2.js --help
//alors sera afficher toutes les options possible à passé comme add read remove etc . On va alors définit dans la commande les possiblité , la description des commandes, l'alias
// si on veut connaitre les paramètre à passer pour une options on écrit node app2.js add
//et il sera affichier les parame à passer en arguments
/*
 Options:
  --help       Affiche de l'aide                                       [booléen]
  --title, -t  Title of note                                            [requis]
  --body, -b   Body of note                                             [requis]

 */

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help(true)
  .argv;
var command = argv._[0];
//node app2.js add -t="flag title" --body="body";

var command = argv._[0];

var command0 = argv._[0];

console.log('command: ' , command);
console.log('process: ' , process.argv);
console.log('yargs: ' , argv);

//yargs enchaine les parametres dans un tableau 
//si on tapbe la commande
// node app.js add param2
//les paramètres sont dans une tableau 
//		yargs:  { _: [ 'add', 'param2' ], '$0': 'app.js' }
//plus pratique à gerer
/*
node app.js add --title=secrets
yargs:  { _: [ 'add' ], title: 'secrets', '$0': 'app.js' }

node app.js add --title "secrets from Steven"
yargs:  { _: [ 'add' ], title: 'secrets from Steven', '$0': 'app.js' }

node app.js add --title=secrets --body="This is secret"

node app.js add --title=secrets --body="This is secret"

node app.js list

node app.js read --title accounts => errors si pas definit dans le module.export

node app.js remove --title accounts 

*/

var argume = yargs.argv._ ;
console.log(argume);

//yards offre une facilité plus grande sur la récupération des paramètres que "process"
if(argume.indexOf('add') > -1){
    console.log('add yargs')
}


if(command == 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command == 'list'){
    console.log(notes.getAll());
}else if(command == 'read'){
	console.log(notes.getNoteAll(argv.title));
}else if(command == 'play'){
	console.log('playing new note');
}else if(command == 'remove'){
	console.log(notes.removeNote(argv.title));
}else{
	console.log('other');
}
