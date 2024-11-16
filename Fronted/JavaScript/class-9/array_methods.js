//Concatenation
// let fruits=['Apple','Orange','Strawberry'];
// let add = ['Mango','Pitch'];
// fruits.push(...add);
// //fruits=fruits.concat('Mango','Pitch'); 
// // incorrect concatenation
// console.log(fruits);


//includes() method
// let students = ["Ashish","benni","suchi","mana"];
// students=students.includes("benni"); 
// // returns true
// console.log(students);


//slice() method
// const fruits = ['Apple', 'Banana', 'Orange', 'Lemon', 'Mango'];
// const slice = fruits.slice(2);
//  const slice2 = fruits.slice(2,4);// index 2 to 3 printing bcz endindex in exclusive 

 
//  console.log(slice);//[ 'Orange','Lemon', 'Mango' ]  index 2 to end printing
//  console.log(slice2);//[ 'Orange', 'Lemon' ]
 
//splice() method 


// const month = ['Jan','Mar','Apr','Jun'];
// month.splice(1, 0, 'Feb');
// here 1 is index value where we want to insert new item
// and 0-> is number of items to remove
//console.log(month);

// const num =[1,2,3,4,5];
// num.splice(3, 0,'dec');
// console.log(num);

let array = [1, 2, 3, 4, 5];
array.forEach((e1,I) => {
  console.log(e1 * 2);
});
