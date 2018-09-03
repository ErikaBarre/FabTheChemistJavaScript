var getUser = (id, callback) => {
    var user = {
        id:id,
        name:'Vikram'
    };
    callback(user);
};

//ceci est une callback en utilisant le synchronisme
getUser(31, (userObject) => {
  console.log(userObject);  
})

var getUser2 = (id, callback) => {
    var user = {
        id:id,
        name:'Vikram'
    };
    
    setTimeout(() => {
        callback(user);
    },3000);
    
};

//ceci est une callback en utilisant le synchronisme
getUser2(32, (userObject) => {
  console.log(userObject);  
})


//se rendre à l'adresse 
//https://maps.googleapis.com/maps/api/geocode/json?address=75%20chaussee%20de%20namue%20wavre

// l'url fournit un json

//se rendre npmjs.com/package/request
//doc sur la request, on peut l'importer
//npm init

