// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- THEME (DARK/LIGHT MODE) TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.textContent = "Toggle Light Mode";
        } else {
            body.classList.remove('dark-mode');
            themeToggleBtn.textContent = "Toggle Dark Mode";
        }
    };

    // Event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the .dark-mode class on the body
        body.classList.toggle('dark-mode');

        // Update the button text and save the theme preference to localStorage
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = "Toggle Light Mode";
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = "Toggle Dark Mode";
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply the saved theme when the page loads
    applySavedTheme();


    // --- CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from the form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation check
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields before submitting.');
        } else {
            // If validation passes, show a success message
            // In a real application, you would send this data to a server
            alert('Thank you for your message! I will get back to you soon.');
            
            // Clear the form
            contactForm.reset();
        }
    });

});