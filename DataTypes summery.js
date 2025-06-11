// Primitive data types 
// 7 types - string nummber boolean null undefined symbol bigInt

// Refrance data types or Non premitive 
// 3 Types - Arrays Objects Functions  

// while assigning the bigInt we have to add a "n" after typing the big number 
// example ->
let bigNumber = 161689416541684613n
console.log(typeof bigNumber)

const arr = [ "avengers ","ironman", "Thor"]

let myObj = {
    age : 22,
    name : "XYz"
}
const myFunction = function(){
    console.log("hellow world")
}
console.table([ (typeof myFunction), (typeof myObj)])