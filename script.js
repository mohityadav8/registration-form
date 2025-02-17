function validateForm() {
    let errorMessage = '';
    let successMessage = '';
    let formValid = true;

    // Clear previous messages
    document.getElementById('error-message').textContent = '';
    document.getElementById('success-message').textContent = '';

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const language = document.getElementById('language').value;
    const zipcode = document.getElementById('zipcode').value;
    const about = document.getElementById('about').value;

    // Validation checks
    if (!name || !email || !password || !phone || !gender || !language || !zipcode || !about) {
        errorMessage += 'All fields are required. Please fill them in.<br>';
        formValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Please enter a valid email address.<br>';
        formValid = false;
    }

    // Phone and Zip Code validation (numeric)
    const phonePattern = /^[0-9]+$/;
    const zipPattern = /^[0-9]{5}$/; // Assuming US 5-digit zip codes
    if (!phonePattern.test(phone)) {
        errorMessage += 'Phone number should only contain digits.<br>';
        formValid = false;
    }
    if (!zipPattern.test(zipcode)) {
        errorMessage += 'Zip code should be 5 digits.<br>';
        formValid = false;
    }

    // Gender selection validation
    if (!gender) {
        errorMessage += 'Please select your gender.<br>';
        formValid = false;
    }

    // Display error or success message
    if (!formValid) {
        document.getElementById('error-message').innerHTML = errorMessage;
        return false; // Prevent form submission
    } else {
        successMessage = 'Thank you for registering! We will send a confirmation to your email.';
        document.getElementById('success-message').textContent = successMessage;
        return false; // Prevent form submission for demo (in real case, you could submit the form)
    }
}
