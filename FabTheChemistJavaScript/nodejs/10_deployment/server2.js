const express = require('express');

var app = express();

app.get('/',(request, response) => {
//response.send('<html><b>Express Test<b></html>');
response.send({
    name:'Adrew',
    likes: [
        'biking','swimming'
    ]
    
})
    
    
});

//on ecoute le port 3000 (port par default)
app.listen(3000);