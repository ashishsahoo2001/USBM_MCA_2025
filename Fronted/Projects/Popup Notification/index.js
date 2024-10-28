let popup; 
  const popupButton =(()=>{
    
     popup = document.getElementById('popup'); // Show the popup
    

    setTimeout(() => {
      popup.style.display = 'none'; //display property to 'none', making it invisible.
    }, 5000);        // Hide the popup after 5 seconds
  });