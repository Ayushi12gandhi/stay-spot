document.getElementById('update-profile').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const bio = document.getElementById('bio').value;

    const updatedProfileData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        bio: bio
    };

    // Call function to save updated data
    updateProfile(updatedProfileData);
});
function updateProfile(data) {
    // Example of sending data to an API using fetch
    fetch('https://api.example.com/updateProfile', {
        method: 'PUT', // or 'POST'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Profile updated successfully!');
            // Optionally, you can refresh the data or update the UI
        } else {
            alert('Failed to update profile. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error updating profile:', error);
    });
}
function validateInput(data) {
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
        alert('Please fill in all required fields.');
        return false;
    }
    // Add more validation as needed
    return true;
}
document.getElementById('update-profile').addEventListener('click', function() {
    const updatedProfileData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        bio: document.getElementById('bio').value
    };

    if (validateInput(updatedProfileData)) {
        updateProfile(updatedProfileData);
    }
});
