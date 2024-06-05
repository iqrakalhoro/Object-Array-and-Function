// Assignment 1: Building Your Friend List
// Step 1
type People ={
    friend:Friend[]
}
// Step 2
type Friend= {
    firstName:string,
    lastName:string,
    id?:number
}
// Step 3
const friend1: Friend ={
    firstName:"Inaam",
    lastName:"Fatima",
    id:1
}
const friend2={
    firstName:"Amna",
    lastName:"Syed",
}
const friend3 ={
    firstName:"Mehwish",
    lastName:"Syeda",
    id:2
}
// Step 4
const people:People={
    friend:[ friend1, friend2, friend3]
}
console.log(people)