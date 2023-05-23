document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var feedback = document.getElementById('feedback').value;
  
    // Display form values (you can modify this part to handle the data as needed)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Feedback:', feedback);
  
    // Clear form fields
    document.getElementById('survey-form').reset();
  });