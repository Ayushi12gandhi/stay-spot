function subscribe() {
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  if (!email || !validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate submission
  console.log(`Subscribed with: ${email}`);
  alert(`Thank you for subscribing with: ${email}`);
  emailInput.value = ""; // Clear input
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
