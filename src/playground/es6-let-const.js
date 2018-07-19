// var variables can be reassigned and redefined
var nameVar = 'Khanh';
console.log('nameVar', nameVar);

// let variables can be reassigned but not redefined
let nameLet = 'Hello';
nameLet = 'Goodbye';
console.log('nameLet', nameLet);

// const variables cannot be reassigned or redefined
const nameConst = 'Const';
console.log('nameConst', nameConst);

// Block scoping
// var variables are only function scope
// const and let are also block scope

var fullName = 'Khanh Tran';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);