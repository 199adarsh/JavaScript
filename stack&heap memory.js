/*  Memory - 1. Stack (Premitive )it gives a cpy of a memory , orignal value will not be changed 
2. Heap(Non Premitive) it gives value or refrance of the memory , orignal vale will be changed  */



//stack memory
let myName = "xyzz"
let anotherName = myName
anotherName = "abc"
console.log(anotherName)
console.log(myName)
//orignal value will not be changed 


//Heap memory 
let user = {
    email: "adarsh@gmail.com",
    number : 123 ,
 }

let user2 = user

user2.email = "xyz@gmail.com"

console.log(user.email)
console.log(user2.email)
//orignal value will be changed 