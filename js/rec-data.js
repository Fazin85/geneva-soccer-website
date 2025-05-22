const recSignupLink = "https://system.gotsport.com/programs/M67941381?reg_role=player"
const price = ""

document.addEventListener("DOMContentLoaded", function() {
    const newLink = recSignupLink;

    document.querySelectorAll('[data-role="rec-register-button"]').forEach(button => {
        button.href = newLink;  // Updates the href of each matching button
    });
});