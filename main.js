const nav = document.querySelectorAll(".navigation ul li a");
nav.forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        link = document.querySelector(anchor.hash);
        link.scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* JS for smooth scroll */
let emails = [];
let subscribe = document.getElementById("subscribe");
let email = document.getElementById("email");
subscribe.addEventListener("click", function(event) {
    if (email.value == "") {
        alert("You have entered an invalid email address!")
    }
});