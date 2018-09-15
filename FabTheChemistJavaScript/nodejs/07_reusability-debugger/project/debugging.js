//node inspect pour déclencher le debuug
// list(10)  : affichage des 10 ligness
// n : permet le passage de ligne en ligne
// c : permet d'aller directement à la fin du script ou bien d'arreter le code où se trouve le mot "debugger;"
// repl :
//on saisit le nom de la variable et sa valeur s'afficher là où on s'est arrêter avec le debugger (avec n)

var person = {
    name : 'Erika'
    
}

person.age = 25;

debugger;

person.name = 'Natalia';

console.log(person);