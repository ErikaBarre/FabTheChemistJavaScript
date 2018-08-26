/**
 * node est non blocking language 
 */

//blocking
var getUser = require('./getUser');

var user1 = getUser(123);
console.log('user1 : ' + user1);

var user2 = getUser(124);
console.log('user2 : ' + user2);

var sum = 1 + 2;
console.log('sum ' + sum);

