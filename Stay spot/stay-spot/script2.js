// Optional future interactivity (like filter buttons)
console.log("Dashboard loaded with animations!");
// Open modal on button click
document.querySelector(".new-btn").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
});

// Close modal on X click
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Form submission
document.getElementById("listingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Listing added!");
  this.reset();
  document.getElementById("modal").style.display = "none";
});
document.getElementById("listingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = this.querySelector("input[type='text']").value;
  const location = this.querySelectorAll("input[type='text']")[1].value;
  const price = this.querySelector("input[type='number']").value;
  const status = this.querySelector("select").value;
  const rating = this.querySelectorAll("input[type='number']")[1].value;

  // Create listing card
  const card = document.createElement("div");
  card.className = "listing-card";
  card.innerHTML = `
    <div class="card-inner">
      <img src="https://via.placeholder.com/150" alt="property" />
      <div class="listing-info">
        <h3>${name} <span style="color:gold">${price}/night</span></h3>
        <p><i class="fa fa-map-marker"></i> ${location}</p>
        <p>⭐ ${rating}</p>
        <span class="status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
      </div>
    </div>
  `;

  // Append card
  document.getElementById("listingsContainer").appendChild(card);

  // Reset form and hide modal
  this.reset();
  document.getElementById("modal").style.display = "none";
});