// //Function

// // write a function to print your name.
// function printName(){
//   console.log(`My name is Ashish`);
// }
// printName(); //function call or invoke the function

// function printName(name/*parameter*/){
//   console.log(`My name is ${name}`);
// }

// printName("Ashish"/*arguments*/); 
// // function call or invoke the function with argument

// function printName(name,age,city){
// console.log(`My name is ${name}, I am ${age} years old, and I live in ${city}`);
// }
// printName("Ashish"); // function call or invoke the function with arguments
// function printName(name,age,city){
// return `My name is ${name}, I am ${age} years old, and I live in ${city}`;
// console.log("I am stop here");

// }
// let output = printName("Ashish",23,"bbsr");
// console.log(output); 


//what is arrow function?
//Syntax:
//console.log(printName("Ashish")); 
//=>fat arrow function
 const printName = (name) => {
return `My name is ${name}`;
}
console.log(printName("Abinash"));

//Done with the basic function 
//callback
//Hof,promise,