const coachSignupLink = ""//TODO: add this

document.addEventListener("DOMContentLoaded", function() {
    const newLink = recSignupLink;

    document.querySelectorAll('[data-role="coach-register-button"]').forEach(button => {
        button.href = newLink;  // Updates the href of each matching button
    });
});