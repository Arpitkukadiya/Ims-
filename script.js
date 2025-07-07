function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('errorMsg');

    if (username === '' || password === '') {
        errorMsg.textContent = 'Both fields are required!';
        return false;
    } else if (username !== 'admin' || password !== 'password123') {
        errorMsg.textContent = 'Incorrect Username or Password!';
        return false;
    }

    errorMsg.textContent = '';
    alert('Login successful!');
    return true;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::
// Function to show or hide the company name field based on user type selection
function toggleCompanyField() {
    var userType = document.getElementById('userType').value;
    var companyField = document.getElementById('companyField');
    
    if (userType === 'company') {
        companyField.style.display = 'block'; // Show company name field if user is company
    } else {
        companyField.style.display = 'none'; // Hide company name field if user is student
    }
}

// Form validation function
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var userType = document.getElementById('userType').value;
    var companyName = document.getElementById('companyName').value;
    var errorMsg = document.getElementById('errorMsg');

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMsg.textContent = 'All fields are required!';
        return false;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match!';
        return false;
    }

    if (userType === 'company' && companyName === '') {
        errorMsg.textContent = 'Please enter your company name!';
        return false;
    }

    errorMsg.textContent = '';
    alert('Registration successful!');
    return true;
}
