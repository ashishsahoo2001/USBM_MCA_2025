
//Synchons code
// console.log("start");
// console.log("middle");
// console.log("end");

//Asynchronous code with setTimeout
// console.log("start");
// setTimeout(() => {
// console.log("middle"); // Delayed execution (asynchronous)
// }, 2000);
// console.log("end");

//Fetch()
const url="https://jsonplaceholder.typicode.com/users"
fetch(url)
.then((res)=>res.json())
.then((res)=> console.log(res))
.catch((error)=>console.log(error))


//using Async/await with fetch

async function fetchData (){
try{
const response = await fetch(url);
const data = await response.json();
console.log(data);

}catch(error){
console.log(error);
}
}
fetchData();