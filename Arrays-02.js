const marvelHeros = ["Tony stark", "Hulk", "Thor"]
const dcHeros = ["Batman", "Superman", "Wonder"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // ["Tony stark", "Hulk", "Thor", ["Batman", "Superman", "Wonder"]]

// marvelHeros.concat(dcHeros);
// console.log(marvelHeros); 


const allHeros = marvelHeros.concat(dcHeros)
console. log(allHeros) ;

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros); 

const anotherArray = [1,2,4,5,[6,7,8], 9,10,[5,2,3,4]];
console.log(anotherArray.flat()); // [1, 2, 4, 5, 6, 7, 8, 9, 10, 5, 2, 3, 4]