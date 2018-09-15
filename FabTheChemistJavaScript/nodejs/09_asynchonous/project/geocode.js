const request = require('request');

var geocodeAddress = (address, callback) =>  {
    
    var format_adr = encodeURIComponent(address);
    //l'inverse est la methode
    decodeURIComponent('avc%20ert');

    console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${format_adr}`);
    
    request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${format_adr}`,
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
                if (error) {
                    callback('unable to connect to server');
                    
                    console.log('unable to connect to server');
                } else if (body.status === 'ZERO_RESULTS') {
                    callback('unable to find data');
                    
                    console.log('unable to find data');
                } else if (body.status === 'OK') {
                    
                    callback(undefined,{
                        address : body.results[0].formatted_address,
                        latitude : body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    } );
                    
                    console.log(JSON.stringify(body, undefined, 2));

                    console.log(`Address: ${body.results[0].formatted_address}`);

                    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
                    console.log(`Lat: ${body.results[0].geometry.location.lng}`);
                }
            }
            
            )};

module.exports.geocodeAddress =  geocodeAddress