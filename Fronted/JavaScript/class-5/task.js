// //Question 1 sum of all digit of a number

let num =7077963071;
let sum=0;
console.log("The number is ",num);
while(num>0){
let rem =num%10;
sum+=rem;
num =Math.floor(num/10);
}
console.log(`The sum of all digit is ${sum}`);



// //Question 2 fibonacci series

let num1=10;
  let x = 0, y = 1;
for (let i = 1; i <= num1; i++) {
    console.log(x); //0
    let nextTerm = x + y; //0+1=1
    x = y; // means value of b is assign to a i,e a=1
    y = nextTerm; // b=1
  }


//Question -3 Multiplication table 
   let n=5;
   for(let i=1;i<=10;i++){
    let value = n*i;
    console.log(`${n}*${i}=${value}`)
   }

  //Pattern Question
  //Q-1

  for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
      pattern+="*";
  }
  console.log(pattern)
}
 

//Q-2
for(let i=5;i>=1;i--){
  let pattern="";
  for(let j=1;j<=i;j++){
    pattern+="*";
}
console.log(pattern);
}

//Q-3

for (let i = 1; i <= 5; i++) {
  let pattern = "";

  // for spaces
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }

  // for stars
  for (let k = 1; k <= (2*i-1); k++) {
    pattern += "*";
  }

  console.log(pattern);
}
for (let i =4 ; i >=1; i--) {
  let pattern = " ";

  // for spaces
  for (let j = 1; j <= 4 - i; j++) {
    pattern += " ";
  }

  // for stars
  for (let k = 1; k <= (2*i-1); k++) {
    pattern += "*";
  }

  console.log(pattern);
}

//Q-4

let row=5;
let col=5;
for(let i=1;i<=row;i++)
{
   let pattern ="";
  for(let j=1;j<=col;j++)
  {
   
    if(i===1 || i=== row || j===1 || j===col)
    {
    pattern+="*";
    }
    else {
      pattern+=" "
    }
  }
  console.log(pattern);
}