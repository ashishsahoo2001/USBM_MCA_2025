// function greetings(name , time){
// if(time >= 6 && time < 12){
//   console.log(`Good Morning ${name} & time is ${time} AM`);
// }
// else if(time >= 12 && time < 18){
//   console.log(`Good Afternoon ${name} & time is ${time} PM`);
// }
// else if(time >= 18 && time < 22){
//   console.log(`Good Evening ${name} & time is ${time} PM`);
// }
// else if(time>=22 && time < 24){
//   console.log(`Good Night ${name} & time is ${time} PM`);

// }

// }

// greetings("Ashish", 7);


// const greetings = (name, time) => {
//   if(time <12){
//     return `Good Morning ${name}`;
//   }else if(time < 18){
//     return `Good Afternoon ${name}`;
//   } else {
//     return `Good Night ${name}`;
//   }
// };
// const output = greetings("Ashish", 14);
// console.log(output);

//calculator

// const calculator =(a,b,operator) => {
//   switch(operator){
//     case '+':
//       return a+b;
//     //  break;
//     case '-':
//       return a - b ;
//     //  break;
//     case '*':
//       return a * b;
//      // break;
//     case '/':
     
//       return a / b;
//      // break;
//   }
// };
// const output= calculator(5, 3, '+');
// console.log(output);

//                     Ternary operator
// const add =(a,b)=>
//  console.log(a+b);
// add(5,6);
// const add = (a, b) => a + b;
// console.log(add(5, 6));

// todo BMI calculator

// const BMI=(weight, height) => {
//   return weight / (height * height);
  
// };
// const output1=BMI(75, 1.75);
// console.log(output1.toFixed(2));


// const pointNumbers=(... numbers) => {
//   return numbers;
// }
// let output2=pointNumbers(1,2,3,4,5);
// console.log(output2);

//                         call back function
// when a function is called as an argument in an another function, it is called a callback function.

//syntax
// function say(name,callback){
//   console.log(`My name ${name}`);
//  return callback;
// }
// function hello(){
//   return 'Hello';
// }
// say('Ashish');

// make a user authentication system using callback function

//SetTimeout(()=>{}//call back function); to delay something

setTimeout(()=>{
  console.log("Hey USBM");
},1000)
setInterval(()=>{
  console.log("I am Ashish");
},1000)