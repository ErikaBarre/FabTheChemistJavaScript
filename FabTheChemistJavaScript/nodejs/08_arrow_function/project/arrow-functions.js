var square = (x) => {
    var result = x * x;
    return result;
};
console.log(square(9));

//on peut ecrire en 1 instruction
// dans ce cas , pas besoin d'accolade
// return est implicite
var square2 = (x) => x * x;
console.log(square2(9));

// et comme il y a qu'un argument en paramètre
//pas besoin de parenthèse
var square3 = x => x * x;
console.log(square3(9));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments); //retourne des object propre à la fonction 
        console.log(`hi ${this.name}`);
    }, //this.name donne un resultat undefined car on entre dans la fonction et donc le contexte change
    sayHiAlt() {
        console.log(`hi ${this.name}`);
    } ,//en ES6, il faudra écrire ainsi pour eviter le undefined et conserver le contexte du user
    sayHiAlt2(x) {
        console.log(x);
        console.log(`hi ${this.name}`);
    }, 
     sayHiAlt3() {
        console.log(arguments);
        console.log(`hi ${this.name}`);
    }, 
};
user.sayHi();
user.sayHiAlt();
user.sayHiAlt2(5);
user.sayHiAlt3(5,6,9);