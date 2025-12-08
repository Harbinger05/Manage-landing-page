console.log(`Escoffier`);

const form = document.querySelector('.manage-footer__form')
const emailInput = document.querySelector('.manage-footer__input')
const emailError = document.querySelector('.manage-footer__email-error')
const smallBtnDots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll(".testimonials-card");


// Form validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.classList.add('--show-error');
    }
    else {
        emailError.classList.remove('--show-error');
        emailInput.value = '';
    }
})


// Slider functionality
smallBtnDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {

        // Remove active from dots
        smallBtnDots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");

        // Remove active from all cards
        cards.forEach(c => c.classList.remove("active"));

        // Show the clicked card
        cards[index].classList.add("active");
    });
});
