const welcomeScreen = document.getElementById("welcome-screen");
const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");
const addressButton = document.getElementById("address-button");

const aboutContent = document.getElementById("about-content");
const contactContent = document.getElementById("contact-content");
const addressContent = document.getElementById("address-content");

aboutButton.addEventListener("click", function() {
  welcomeScreen.style.display = "none";
  aboutContent.style.display = "block";
});

contactButton.addEventListener("click", function() {
  welcomeScreen.style.display = "none";
  contactContent.style.display = "block";
});

addressButton.addEventListener("click", function() {
  welcomeScreen.style.display = "none";
  addressContent.style.display = "block";
});
