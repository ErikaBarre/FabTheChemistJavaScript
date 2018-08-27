console.log('starting app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');


var command = process.argv[2];
console.log('command: ' , command);

if(command == 'add'){
	console.log('Adding new note');
}else if(command == 'list'){
	console.log('listing new note');
}else if(command == 'read'){
	console.log('reading new note');
}else if(command == 'play'){
	console.log('playing new note');
}else if(command == 'remove'){
	console.log('removing new note');
}else{
	console.log('other');
}

//argsv : arguments of vector (on voit toute les process en cours d'exécution
console.log(process.argv);

/*si on exécute 
  "node app.js list" , dans le liste on a 
[ '/usr/bin/node',
	  '/home/fabrice/Developpement/git/FabTheChemistJavaScript/nodejs/04_client_input/app.js',
	  'list' ]
 on voit 'list' apparaitre, ce qui signife qu'on peut passer un paramètre à la "note" (voir plus haut avec la variable "command")
 
 */

/*
 on peut aussi écrire comme lancement de l'application
 node app.js remove --title="secrets"
 [ '/usr/bin/node',
  '/home/fabrice/Developpement/git/FabTheChemistJavaScript/nodejs/04_client_input/app.js',
  'list',
  '--title=secrets' ]
  le dernier param est conservé avec l'égalité. Dès qu'on place un espace, on a un nodejs considère que c'est un paramètre supplémentaire

 */
