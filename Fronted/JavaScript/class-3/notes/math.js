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
let total_bill = 1000;
let discount = 200;
if(total_bill>500)
{
  console.log("You will get a Discount.");
  console.log(`Discount is ${discount}`);
  total_bill=total_bill-discount;
  console.log(`Your total bill is ${total_bill}`);
}
else {
  console.log("Sorry");
}