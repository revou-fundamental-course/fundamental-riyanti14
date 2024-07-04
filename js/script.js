document.addEventListener("DOMContentLoaded", function() {

    // Form validation and display submitted data
    document.getElementById("message-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById("message").value;

        if (name && dob && gender && message) {
            const currentTime = new Date().toLocaleString();

            document.getElementById("current-time").innerText = currentTime;
            document.getElementById("submitted-name").innerText = name;
            document.getElementById("submitted-dob").innerText = dob;
            document.getElementById("submitted-gender").innerText = gender;
            document.getElementById("submitted-message").innerText = message;
        } else {
            alert("Please fill in all fields.");
        }
    });
});
