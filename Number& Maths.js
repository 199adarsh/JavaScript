const score = 400
const balance = new Number (100)
console.log(balance, score);

console.log(balance.toString().length);
console.log(balance.toFixed(1));
const otherNumber = 22.25112
console. log (otherNumber. toPrecision(4))

const hundreds = 100000
console.log (hundreds.toLocaleString('en-IN')); // add comma so that the number could be easliy read-able
console.log( );

// console.log (Math);
// console.log (Math. abs(-4) ) ;
// console.log (Math. round (4.6) ) ;
// console.log(Math. ceil(4.2));
// console. log(Math. floor(4.9) ) ;
// console.log(Math.min( 3, 6, 8));
// console.log(Math.max(4,6,2,1,5,6));

console.log(`Math.random gives value in 0-1: ${Math.random()}`);
console.log(`Here we multiply by 10 so 0-10: ${Math.random() * 10}`);
console.log(`Using Math.floor we can make round fig 0-9: ${Math.floor(Math.random() * 10)}`);

const min = 10;
const max = 20;
console.log(`Random integer between ${min} and ${max}: ${Math.floor(Math.random() * (max - min + 1)) + min}`);
