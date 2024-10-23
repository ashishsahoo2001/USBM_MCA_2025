function updateClock(){
  const clock = document.getElementById("clock");

  const now = new Date();
  console.log(clock);
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  clock.textContent = `${hours}:${minutes}:${seconds}`
  
}
updateClock();
setInterval(updateClock,1000)
 