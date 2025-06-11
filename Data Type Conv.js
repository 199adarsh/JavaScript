let score = "33abc"
let score2 = "33"

console.log(typeof score)
console.log(typeof (score))
console.log(typeof score2) 
console.log(typeof (score2))

let valueInNumber = Number(score)  //converts string -> number
console.log(valueInNumber)
console.log(typeof valueInNumber)

// 33abc is not number so the output is NaN (Not in Number)
console.log()

let valueInNumber2 = Number(score2)  //converts string -> number
console.log(valueInNumber2)
console.log(typeof valueInNumber2)

console.log()
console.table([typeof (valueInNumber2),typeof (valueInNumber),valueInNumber2,valueInNumber])

