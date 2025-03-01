document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.style.animation = "fadeOut 1s ease-in-out";
        setTimeout(() => {
            let rating = prompt("Thank you for contacting us! Please rate our service from 1 to 5:");
            alert("Your rating: " + (rating ? rating : "No rating given"));
            form.reset();
            form.style.animation = "fadeIn 1.5s ease-in-out";
        }, 1000);
    });
});