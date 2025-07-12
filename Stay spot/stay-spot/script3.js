// Owner Sign In
document.getElementById('ownerSigninForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('ownerEmail').value;
  const password = document.getElementById('ownerPassword').value;

  if (email && password) {
    alert(`Owner signed in with: ${email}`);
    // You can redirect or validate with backend here
  }
});

// Renter Sign In
document.getElementById('renterSigninForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('renterEmail').value;
  const password = document.getElementById('renterPassword').value;

  if (email && password) {
    alert(`Renter signed in with: ${email}`);
    // You can redirect or validate with backend here
  }
});
