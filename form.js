function validateForm() {
    // Get form elements
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const contactnumber = document.getElementById('contactnumber').value;
    const address = document.getElementById('address').value;

    // Basic form validation: Check if any field is empty
    if (firstname === "" || lastname === "" || email === "" || contactnumber === "" || address === "") {
        document.getElementById('errorMessage').innerHTML = "Please fill out all fields correctly.";
        document.getElementById('errorMessage').style.display = "block";
        return false; // Prevent form submission if any field is empty
    }

    // Email validation: Check if email contains '@'
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.includes('@')) {
        alert("Please enter a valid email address.");
        return false;
    }



    // If all validations pass, show success message and reset form
    document.getElementById('errorMessage').style.display = "none"; // Hide error message if form is valid
    document.getElementById('registrationForm').reset(); // Reset form fields
    document.getElementById('successMessage').style.display = "block"; // Show success message

    return false; // Prevent actual form submission to simulate a successful submission
}
