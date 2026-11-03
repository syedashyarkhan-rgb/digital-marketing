// Contact Form - Frontend Only

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector("#contact-form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const subject = contactForm.querySelector('[name="subject"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

});