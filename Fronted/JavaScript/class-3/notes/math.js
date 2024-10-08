//Mathematical Operator:
// let num1 = 5;
// let num2 = 3;
// let result = num1 + num2;//Addition Operator
// let result = num1 - num2;//Subtraction
// let result = num1 * num2;//Multiplication
// let result = num1 / num2;//Division

//Modulo Operator:
//to find out reminder
// let num =6;
// let even =(num%2);
// console.log(even);
// let queue=2 * 3;
// console.log(queue);

//Relational Operator
// console.log(5>=5);
//console.log(5>5);

//Equality Operator
// console.log(5 !== "5")
 
//Falsy  value 
// false,0,-0,"",``,'',null,undefined,NaN
// let total_bill = 1000;
// let discount = 200;
// if(total_bill>500)
// {
//   console.log("You will get a Discount.");
//   console.log(`Discount is ${discount}`);
//   total_bill=total_bill-discount;
//   console.log(`Your total bill is ${total_bill}`);
// }
// else {
//   console.log("Sorry You have no Discount");
// }
//Question-2
// let age = 18;
// if(age >= 60)
// {
// console.log("Senior and adult");
// }
// else if (age >= 18)
// {
//   console.log("Adult");
// }
// else {
//   console.log("Minor");
// }
//Question-3
// let Gender = "Male";
// let age = 22;
// if (Gender==="Male" )
// {
//   if(age>=22){
//   console.log("He can able to marry");}
// }
// else{
//   console.log("Not marry");
// }

//Question-4
// let char ="a";
// switch (char){
//   case "a":
//     console.log("It's a vowel");
//     break;
//     case "e":
//     console.log("It's a vowel");
//     break;
//     case "i":
//     console.log("It's a vowel");
//     break;
//     case "o":
//     console.log("It's a vowel");
//     break;
//     case "u":
//     console.log("It's a vowel");
//     break;
//     default:
//     console.log("It's not a vowel");
// }

//Question-4 to check a month
// let month = 11;
// switch(month){
// case 0:
//   console.log("January");
//   break;
//   case 1:
//   console.log("February");
//   break;
//   case 2:
//   console.log("March");
//   break;
//   case 3:
//   console.log("April");
//   break;
//   case 4:
//   console.log("May");
//   break;
//   case 5:
//   console.log("June");
//   break;
//   case 6:
//   console.log("July");
//   break;
//   case 7:
//   console.log("August");
//   break;
//   case 8:
//   console.log("September");
//   break;
//   case 9:
//   console.log("October");
//   break;
//   case 10:
//   console.log("November");
//   break;
//   case 11:
//   console.log("December");
//   break;
//   default:
//     console.log("Not a Month");

// }
// Question-5 to check a day
// let week_no=1;
// switch(week_no){
//   case 0:
//     console.log("Sunday");
//     break;
//     case 1:
//     console.log("Monday");
//     break;case 2:
//     console.log("Tuesday");
//     break;case 3:
//     console.log("Wednesday");
//     break;case 4:
//     console.log("Thrusday");
//     break;case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
//     break;
//     default:
//       console.log("enter valid number");
// }
//const userInput = prompt("Please enter your name:");
// const readline = require("readline");
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let item1;
// let item2;

// r1.question("Enter item1: ", (input1) => {
//   item1 = parseInt(input1);

//   r1.question("Enter item2: ", (input2) => {
//     item2 = parseInt(input2);

//     let add = item1 + item2;
//     console.log("The sum is:", add);

//     r1.close(); // Close the readline interface after the input is processed
//   });
// });
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter item1: ", (input1) => {
  item1 = parseInt(input1);
  if (item1 % 2 !== 0) 
    console.log("This is odd:", item1);
  
  else {
    console.log ("This is even:",item1);
  }
  });


