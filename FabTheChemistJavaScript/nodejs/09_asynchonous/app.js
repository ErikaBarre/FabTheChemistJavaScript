// node app.js -a '75 chaussée de namur  wavre'

//import plus necessaore puisque appeler dans un autres ficiers js où on en a besoin
//const request = require('request');


const yargs = require('yargs');

const geocode = require('./project/geocode');
const forecast = require('./project/forecast');

//input du user
const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address',
            string: true
        }
    /*,
        lat: {
                demand: true,
                alias: 'latitude',
                describe: 'Latitude',
                string: true
            },
        lng: {
                demand: true,
                alias: 'longitude',
                describe: 'Longitude',
                string: true
            }
            */

    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);



//geocode.geocodeAddress(argv.address);

//on peut encore plus factoriser

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results);
        
    forecast.forecast(results.latitude, results.longitude, (errorMessage, wresults) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        //console.log(JSON.stringify(wresults));
        console.log(JSON.stringify(wresults.temperature));
        console.log(JSON.stringify(wresults.apparentTemperature));
    }
    
});
    }
    
});

/*  on va chainer les 2 callback ,on fait passer le bloc ci -dessus dans le retour du précédent callback
 forecast.forecast(argv.latitude, argv.longitude, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results));
    }
    
});
*/

//on envoie le bloc ci -dessous dans un fichier
/*  
encodeURIComponent(argv.address);
//l'inverse est la methode
decodeURIComponent('avc%20ert');

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
    json: true
}, (error, response, body) => {
    console.log(body);
    //le body contient tout le contenu de la requete HTTP. Il contient aussi les info JSON. C'est le conteneur des data provenant du serveur. 
    //object response contient un status code mais également le body, le header (partie du http protocole, ilk provient du serveur), request (stocke l'info de la request, contient aussi les options de la réponse demandée comme application/json car json est à true de notre coté  )
    //autre presentation qui permet de connaitre le contenu de [Object]
    //2eme arg : filtrer les propriété, pas besoin ici
    //3eme arg : nombre d'indentation entre les propriétés
    
    //dans les errors il en existe de 2 type
    //erreur venant de chez nous comme problème de connection
    //erreur venant du serveur que l'ont interroge (pas dispo ou bien ne trouve pas les info demandée car la requete est erronée etc)
    
    //la gestion des erreurs:
    if(error){
        console.log('unable to connect to server');
    }else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find data');
    }else if(body.status === 'OK'){
        console.log(JSON.stringify(body, undefined, 2));
    
    console.log(`Address: ${body.results[0].formatted_address}`);
    
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lat: ${body.results[0].geometry.location.lng}`);
    }
  */


//});
