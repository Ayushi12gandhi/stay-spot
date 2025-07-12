document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", signUp);

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", validateField);
    });
});

function validateField(event) {
    const field = event.target;
    const error = field.nextElementSibling;

    if (field.id === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error.textContent = emailPattern.test(field.value) ? "" : "Invalid email format.";
    }

    if (field.id === "password") {
        error.textContent = field.value.length >= 6 ? "" : "Password must be at least 6 characters.";
    }

    if (field.id === "confirm-password") {
        const password = document.getElementById("password").value;
        error.textContent = field.value === password ? "" : "Passwords do not match.";
    }

    if (field.id === "phone") {
        error.textContent = /^\d{10}$/.test(field.value) ? "" : "Enter a valid 10-digit phone number.";
    }

    error.style.opacity = error.textContent ? "1" : "0";
}

function signUp() {
    const errors = document.querySelectorAll(".error");

    for (let error of errors) {
        if (error.textContent) {
            alert("Please fix the errors in the form.");
            return;
        }
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const businessName = document.getElementById("business-name").value.trim();
    const gstNumber = document.getElementById("gst-number").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !email || !password || !businessName || !gstNumber || !phone || !address) {
        alert("Please fill out all fields.");
        return;
    }

    alert("Sign-Up Successful!\nName: " + name + "\nEmail: " + email + "\nBusiness: " + businessName);
    console.log({ name, email, password, businessName, gstNumber, phone, address });
}