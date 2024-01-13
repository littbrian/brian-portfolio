function validateForm() {
    var nameInput = document.getElementById("username");
    var emailInput = document.getElementById("exampleInputEmail1");
    var messageInput = document.getElementById("textarea");

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // A simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
