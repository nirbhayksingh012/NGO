document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from refreshing page
  
    // Grab form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Display a response message
    document.getElementById("response").innerText = 'Thank you, ${name}! Well get back to you at ${email}.';
  
    // Clear form
    document.getElementById("contactForm").reset();
  });