function searchRooms() {
  const location = document.getElementById("location").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  console.log("Searching for rooms with:");
  console.log(`Location: ${location}`);
  console.log(`Check-in: ${checkin}`);
  console.log(`Check-out: ${checkout}`);
  console.log(`Guests: ${guests}`);

  alert(`Searching rooms in ${location} from ${checkin} to ${checkout} for ${guests}`);
}
