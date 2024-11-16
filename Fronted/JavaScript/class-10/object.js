//object literal

// let Student ={
//   name: 'Ashish',
//   age: 23,
//   batch:"Mca"
//   roll:19, 
// };
//console.log(Student);

//using constructor function
const o =new Object();

o.name = 'Ashish';
o.age = 23;
o.batch = 'Mca';
o.roll = 19;
//console.log(o);

function Student(name,age,batch,roll){
  this.name = name;
  this.age = age;
  this.batch = batch;
  this.roll = roll;
}
const s1 = new Student('Ashish',23,'Mca',19);
console.log(s1);

// todo create an array ob object of 50 student 