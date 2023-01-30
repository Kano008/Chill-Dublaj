document.getElementById("about-btn").addEventListener("click", function() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("content").innerHTML = "<h2>Hakkında</h2><p>Samsun Anadolu Lisesi hakkında bilgi yer alacak...</p>";
});

document.getElementById("contact-btn").addEventListener("click", function() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("content").innerHTML = "<h2>İletişim</h2><p>Samsun Anadolu Lisesi iletişim bilgileri yer alacak...</p>";
});

document.getElementById("address-btn").addEventListener("click", function() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("content").innerHTML = "<h2>Adres</h2><p>Samsun Anadolu Lisesi adres bilgileri yer alacak...</p>";
});
