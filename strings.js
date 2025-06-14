//strings
const name = "adarsh"
const repoCount = 3
console.log(`HELLO MY NAME IS ${name} and my repo count is ${repoCount}`)

const heroName = new String ('adarshh')
console.log(heroName[0]);  // It gave key and value pair of string -> 0:a,1:d,
console.log(heroName.length)
console.log(heroName.toLocaleUpperCase() )
console.log(heroName.charAt('3'));
console.log(heroName.indexOf('r'));


const newString = heroName.substring(1,5)
console.log(newString);

/*console.log(heroName.toLowerCase());  
// 'adarshh' → converts all to lowercase

console.log(heroName.includes('dar'));  
// true → checks if 'dar' exists in the string

console.log(heroName.endsWith('hh'));  
// true → checks if string ends with 'hh'

console.log(heroName.startsWith('ad'));  
// true → checks if string starts with 'ad'

console.log(heroName.slice(2, 6));  
// 'arsh' → extracts from index 2 to 6 (not including 6)

console.log(heroName.replace('a', 'A'));  
// 'Adarshh' → replaces first 'a' with 'A'

console.log(heroName.repeat(2));  
// 'adarshhadarshh' → repeats string twice

console.log(heroName.lastIndexOf('h'));  
// 6 → index of last occurrence of 'h'

console.log(heroName.trim());  
// 'adarshh' → removes whitespace from both sides (no effect here)

console.log(heroName.valueOf());  
// 'adarshh' → primitive value of String object */
