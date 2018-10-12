/**
 * node est non blocking language 
 */
//non blocking : toutes les operation s'effectuent en meme temps
var getUsernb =  require('./getUserb');

getUsernb(123, function(user1){
	console.log('user1 ' + user1);
})

getUsernb(124, function(user2){
	console.log('user1 ' + user2);
})
var sum = 1 + 2;
console.log('sum ' + sum);
