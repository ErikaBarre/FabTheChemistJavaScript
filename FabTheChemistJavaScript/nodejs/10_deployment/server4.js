const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partial');
//pour tenier compte des fichiers avec le code en commun pour les réutilisabilité, on lance la commande qui tient compte des fichiers hbs:
//nodemon server4.js -e js,hbs

//ajout de propritété clé valeur
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/js'));
//pour acceder  la page http://localhost:3000/help.html

//on peut enrengistrer une fonction qui sera utilisée dans les fichiers hbs (voir footer.hbs)
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
app.listen(3000, () => {
    console.log("server is up on port 3000");
});