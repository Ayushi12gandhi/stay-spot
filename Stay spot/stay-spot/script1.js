document.addEventListener("DOMContentLoaded", function() {
    updateActiveFilters();
    setupLocationAutocomplete();
});

function applyFilters() {
    updateActiveFilters();
}

function setupLocationAutocomplete() {
    const locationInput = document.getElementById("location");
    const suggestions = document.createElement("div");
    suggestions.setAttribute("id", "location-suggestions");
    locationInput.parentNode.appendChild(suggestions);

    locationInput.addEventListener("input", async function() {
        const query = locationInput.value.trim();
        if (query.length > 0) { // Start suggesting from first letter
            const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&filter=countrycode:IN&apiKey=YOUR_API_KEY`);
            const data = await response.json();

            suggestions.innerHTML = "";

            data.features.slice(0, 5).forEach(feature => { // Show top 5 results
                const option = document.createElement("div");
                option.textContent = feature.properties.formatted;
                option.classList.add("suggestion-item");
                option.onclick = () => {
                    locationInput.value = feature.properties.formatted;
                    suggestions.innerHTML = "";
                };
                suggestions.appendChild(option);
            });
        } else {
            suggestions.innerHTML = "";
        }
    });
}

function updateActiveFilters() {
    const location = document.getElementById("location").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;

    const activeFilters = document.getElementById("selected-filters");
    activeFilters.innerHTML = "";

    if (location) activeFilters.innerHTML += `<span>${location} <button onclick='removeActiveFilter("location")'>x</button></span>`;
    if (minPrice && maxPrice) activeFilters.innerHTML += `<span>$${minPrice} - $${maxPrice} <button onclick='removeActiveFilter("price")'>x</button></span>`;
    if (guests) activeFilters.innerHTML += `<span>${guests} Guests <button onclick='removeActiveFilter("guests")'>x</button></span>`;
}

function removeActiveFilter(filter) {
    if (filter === "location") document.getElementById("location").value = "";
    if (filter === "price") {
        document.getElementById("min-price").value = "";
        document.getElementById("max-price").value = "";
    }
    if (filter === "guests") document.getElementById("guests").value = "1";

    updateActiveFilters();
}
