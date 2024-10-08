   const readline = require("readline");
   const r1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   });
//       Question-1   

// let bill;
// let discount =200;
// let Total_Bill;
// r1.question("Enter Amount ", (input) => {
//   bill = parseInt(input);
     
//           if(bill>500){
//             console.log("You will get a Discount of: ",discount);
//             Total_Bill = bill - discount;
//             console.log(`Your final amount is `,Total_Bill);
//           }
//           else{
//             console.log("Sorry you don't have any discount");
//           }
//         });

//        Question-2
//      let age;
//      r1.question("Enter Your age ", (input) => {
//       age = parseInt(input);
//       if(age>=60){
//         console.log("You are Senior and Adult");
//       }
//       else if(age>=18){
//         console.log("You are Adult");
//       }
//       else{
//         console.log("You are Minor");
//       }
//     });

//       Question-3

// let Gender;
// let Age;
// r1.question("Enter Your Gender ",(input1)=>{
// Gender=input1;

//   if(Gender==="Male"|| Gender==="male")
//   {
//     r1.question("Enter Your Age ",(input2)=>{
//       Age=parseInt(input2);
//     if(Age>=22){
//       console.log("He can  marry");
//     }
//     else{
//       console.log("You can't marry");
//     }
//     });
//   }
//   else{
//     console.log("He can't marry");
//   }
// });

//     Question-4

let Week_no;
 r1.question("Enter the week no. ",(input)=>{
     Week_no = parseInt(input);
     switch(Week_no){
       case 0:
         console.log("Today is Sunday");
         break;
         case 1:
           console.log("Today is Monday");
           break;
           case 2:
           console.log("Today is Tuesday");
           break;
           case 3:
           console.log("Today is Wednesday");
           break;
           case 4:
           console.log("Today is Thrusday");
           break;
           case 5:
           console.log("Today is Friday");
           break;
           case 6:
           console.log("Today is Saturday");
           break;
                    default:
                      console.log("You entered a wrong number");
             }
           });