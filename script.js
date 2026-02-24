// Display current year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Simple form validation
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}