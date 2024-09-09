document.addEventListener('DOMContentLoaded', () => {
    // Handle Personal Information Form Submission
    const personalInfoForm = document.getElementById('personal-info-form');
    personalInfoForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        
        // Basic validation
        if (username === '' || email === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Personal information updated successfully!');
            // Here you would typically send the data to the server using fetch or AJAX
            console.log(`Username: ${username}, Email: ${email}`);
        }
    });

    // Handle Password Change Form Submission
    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Basic validation
        if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
        } else if (newPassword !== confirmPassword) {
            alert('New passwords do not match.');
        } else {
            alert('Password changed successfully!');
            // Here you would typically send the data to the server using fetch or AJAX
            console.log(`Current Password: ${currentPassword}, New Password: ${newPassword}`);
        }
    });

    // Handle Account Management Buttons
    const deactivateButton = document.querySelector('.settings-section .action-button:nth-child(1)');
    const deleteButton = document.querySelector('.settings-section .action-button:nth-child(2)');
    
    deactivateButton.addEventListener('click', () => {
        alert('Account deactivated.');
        // Here you would typically send the action to the server
        console.log('Account deactivated.');
    });

    deleteButton.addEventListener('click', () => {
        const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirmation) {
            alert('Account deleted.');
            // Here you would typically send the action to the server
            console.log('Account deleted.');
        }
    });
});
