const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
        const status = document.getElementById("formStatus");
    
        form.addEventListener("submit", function (e) {
            e.preventDefault();
    
            const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
            };
    
            fetch("https://formspree.io/f/yourFormID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (response.ok) {
                        status.textContent = "Message sent successfully!";
                        status.style.color = "green";
                        form.reset();
                    } else {
                        return response.json().then((data) => {
                            throw new Error(data.error || "Something went wrong.");
                        });
                    }
                })
                .catch((error) => {
                    status.textContent = error.message;
                    status.style.color = "red";
                });
        });
    });

    