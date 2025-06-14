// let myDate = new Date()
// console. log (`${myDate. toString( )} `) ;
// console. log (`${myDate. toDateString( )}` ) ;
// console. log (`${myDate. toLocaleString( )}` ) ;

let myCreatedDate = new Date(2023,10,22,14,20,23)
console.log(`${ myCreatedDate.toLocaleString() }`);

//Time stamp
let myTimeStamp = Date. now()
console. log(`${ (myTimeStamp) }` );
console. log ((`${ myCreatedDate. getTime( )} `)) ;
console.log(Math.floor(Date.now()/1000));


let newDate = new Date
console. log( newDate) ;
console. log(newDate.getMonth() + 1);
console. log(`Returns day ${newDate.getDate ( )}` ) ;

// Create a new Date instance for today
const newDate1 = new Date();

// Use toLocaleString with weekday: "long"
const weekdayName = newDate.toLocaleString('default', {
  weekday: 'long'
});

// Output the result
console.log(`Today is: ${weekdayName}`);
