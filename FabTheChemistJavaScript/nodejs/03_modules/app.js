console.log('starting app');

//require se trouve dans les fichier node pour ramener un module (c'est comme l'import en java)
//dans ce cas on ramène le module fs (file system )
// pour connaitre la sysntaxe des packages à importer : se rendre sur nodejs/api
//module filesystem
const fs = require('fs');
//module operating system
const os = require('os');
//import de fichier dévelppé par nos propre soins
const notes = require('./notes.js');


//appenfile permet ajout de texte. La fonction suivante ne gère pas les erreurs, elle est actuellement deprecated mais fonctionne en laissant un stack d'erreur
//(node:8458) [DEP0013] DeprecationWarning: Calling an asynchronous function without callback is deprecated.
//fs.appendFile('greet.txt','Text à inséré dans le fichier');

//avec gestion des erreurs

fs.appendFile('greet2.txt','Text à inséré dans le fichier 2', function(err){
    if(err){
        console.log('error with appendFile')
    }
});


var user = os.userInfo();

//gestion des erreurs sans 3 eme argument, la fonction intégre le callback du success
fs.appendFileSync('greet3.txt','Text à inséré dans le fichier 3 ' + user.username + '\n');

//avec TEMPLATE STRING !!! pas de quote des backquote
//voir partie js pour les template string
fs.appendFileSync('greet3.txt',` template string ${user.username} and age ${notes.age} , prénom ${notes.callname()} nom : ${notes.callnameB()} 
, profession ${notes.callnameBC('playmate')} , sitation mariétage ${notes.callnameBD('marié', '2 enfants', ' pointure 37')}\n`  );

console.log('end exec');
