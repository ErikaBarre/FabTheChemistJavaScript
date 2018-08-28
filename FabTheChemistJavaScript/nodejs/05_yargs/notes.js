console.log('Starting notes.js');

var addNote = (title, body) =>{
	console.log('Adding note' , title, body);
} ;

var getAll = () =>{
	console.log('get all notes');
} ;

var getNoteAll = (title) =>{
	console.log('get note :' , title);
} ;

var removeNote = (title) =>{
	console.log('remove note :' , title);
} ;


//en ES6 (si la valeur est identique à la key plus besoin de placer arg:arg mais juste arg
//placer les identifiant de fct dans l'object module (vu avant) pour rendre les variables  accessible à l'extérieur du js 
module.exports = {
	addNote,
	getAll,
    getNoteAll,
    removeNote
}

/*
//en ES5
module.exports = {
	addNote:addNote
}
*/
