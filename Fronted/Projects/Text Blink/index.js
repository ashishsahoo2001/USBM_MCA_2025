const blinkText = document.getElementById('blink-text');//select by id and store in variable blinkText


setInterval(() => {
  

blinkText.style.visibility = blinkText.style.visibility === 'hidden' ? 'visible' : 'hidden';//change visibility to hidden or visible every second. 

}, 300); //this will make the text blink.