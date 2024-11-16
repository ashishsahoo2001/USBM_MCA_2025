let arr =["A","B","R","S","J","P"];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }
arr.forEach((e1,I)=>{
console.log(e1.toLowerCase());

});
//Arr(e1);

// const newArr =arr.map((e1,I ) => {
//   console.log(e1);

// return e1.toLowerCase();
// });
// console.log(newArr);
let num = [1,2,3,4,5]; 
const odd=num.filter((e1,I) => {
  return e1 % 2 !== 0;
});
console.log(odd);
