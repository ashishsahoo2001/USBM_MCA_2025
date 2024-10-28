function updateClock() {
 

  const now = new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = hours >= 12? 'PM' : 'AM'; // Determine AM/PM
  hours = hours % 12; // Convert to 12-hour format
  // Add leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

 clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}

updateClock();
setInterval(updateClock, 1000);
 