console.log('Starting notes.js');

//module est un grand object
//cet objectcdonne toute les informatios concernant le fichier js comme le path du file etc
console.log(module);
//la propriété exports est vide par défaut mais on peut y foutre tout ce qu'on veut qu'il s'agit d'un object
//on peut s'en servir comme vide grenier
module.exports; //{}

module.exports.age = 39;

module.exports.callname = function(){
	return 'Erika';
}

module.exports.callnameB = () => {
	return 'Barre';
}

module.exports.callnameBC = (param1) => {
	return param1;
}

module.exports.callnameBD = (param1, param2) => {
	return param1 + ' ' + param2 + ' ' + arguments[0].toString();
}