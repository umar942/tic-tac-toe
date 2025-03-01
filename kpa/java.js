
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("admission-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.style.animation = "fadeOut 1s ease-in-out";
        setTimeout(() => {
            alert("Form Submitted Successfully!");
            form.reset();
            form.style.animation = "fadeIn 1.5s ease-in-out";
        }, 1000);
    });
});


