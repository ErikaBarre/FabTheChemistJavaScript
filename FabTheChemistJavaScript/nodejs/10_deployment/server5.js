const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partial');
//pour tenier compte des fichiers avec le code en commun pour les réutilisabilité, on lance la commande qui tient compte des fichiers hbs:
//nodemon server4.js -e js,hbs

//ajout de propritété clé valeur
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/js'));
//pour acceder  la page http://localhost:3000/help.html

//pour s'assure que l' application n'est pas bloquée si l'application bloque sur une erreur
//le next sert à passer à l'étape suivante et poursuivre le code
app.use((request, response, next) => {
    var now = new Date().toString();
   var log = `${now}:${request.method}:${request.url}`;              console.log(`${now}:${request.method}:${request.url}`);
    //fonction suivante est deprecated
   //fs.appendFile("server.log", log + '\n');
    
    
    fs.appendFile("server.log", log + '\n', (err)=>{
        console.log('unable to append in log file');
    });
    
    
    next(); 
});


//on afficher cette page de maintenance à la place de la page dans localhost:3000/about
//car la defintion de la page about est en dessous et comme on ne place pas de "next()" pour continuer le code, le code la page s'arrrete
//par contre si on va dans public , la page help s'affichera car /public est definie plus haut dans ce code, il faudra alors déplacer la ligne au dessous
app.use((request, response, next) => {
    response.render('maintenance.hbs');
})

//on peut enrengistrer une fonction "getCurrentYear" qui sera utilisée dans les fichiers hbs (voir footer.hbs)
hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear();
    
} );

//voir dans home.hbs
hbs.registerHelper('screamit', (text) => {
    return text.toUpperCase();
    
} );

app.get('/',(request, response) => {
response.send('<html><b>Express Test<b></html>');

});
//http://localhost:3000

app.get('/about',(request, response) => {
    //pour hbs
    //render permet l'affichage du template sur le client
response.render('about.hbs',{
    pageTitle: 'About page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'hello beybey'
}); 
    //http://localhost:3000/about

});
//la page s'affiche sur 
//http://localhost:3000/about

app.get('/bad',(request, response) => {
response.send({
    errorMessage:'Unabled to handle request'
   
    
});

});

//on ecoute le port 3000 (port par default)
app.listen(port, () => {
    console.log("server is up on port ${port} v5");
});