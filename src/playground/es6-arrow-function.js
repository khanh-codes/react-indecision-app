const square = function (x) {
    return x*x;
};

function squareName(x) {
    return x*x;
};

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x;

console.log(squareArrow(9));


const getFirstName = (name) => {
    return name.split(' ')[0];
};

const getFirstNameArrow = (name) => name.split(' ')[0];

console.log(getFirstName('Khanh Tran'));
console.log(getFirstNameArrow('Acacia Dai'));