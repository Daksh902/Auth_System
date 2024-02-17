// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            });
            if (response.ok) {
                window.location.href = response.url;
            } else {
                const errorMessage = await response.text();
                const errorElement = form.querySelector('.error-message');
                errorElement.textContent = errorMessage;
            }
        });
    });
});
