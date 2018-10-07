const express = require('express');

var app = express();

app.use(express.static(__dirname + '/js'));
//pour acceder  la page http://localhost:3000/help.html

app.get('/',(request, response) => {
response.send('<html><b>Express Test<b></html>');

});
//http://localhost:3000

app.get('/about',(request, response) => {
response.send('<html><b>new Test<b></html>');

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