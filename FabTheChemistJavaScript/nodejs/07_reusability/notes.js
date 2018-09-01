console.log('Starting notes.js');

//réutiliser le code s'effectue par les fonctions
// on reprend le 06_json et on récrit différent

const fs = require('fs');

var fetchNodes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (exception) {
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
    if (duplicateNotes.length === 0) {
        notes.push(note);
        try {
            saveNotes(notes);
            return note;
        } catch (exception) {
            return 'ERROR_SAVE';
        }

    } else {
        return 'DUPLICATED_DATA';
    }
};

var getAll = () => {
    return fetchNodes();
};

var getNote = (title) => {
    //console.log('get note :', title);
    var notes = fetchNodes();
    var filterNotes = notes.filter((note) => {
        return note.title = title;
    });
    return filterNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNodes();
    var filteredNotes = notes.filter((note) =>     note.title !== title);
    //fs.truncate('notes-data.json', 0, function(){console.log('done')})
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
    
};
    
var logNote = (note) =>{
    debugger;
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
