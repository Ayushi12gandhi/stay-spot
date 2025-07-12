document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        responseMessage.textContent = 'Sending...';

        // Simulate form submission
        setTimeout(() => {
            responseMessage.textContent = 'Message sent successfully!';
            form.reset();
        }, 1000);
    });
});
