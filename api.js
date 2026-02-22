//Api Palma
fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.571111&lon=2.651667&appid=61a8f88ebfe982ef3e5a18707129382e&units=metric&lang=es")
.then(response => response.json())
.then(data => {
document.getElementById("Temperatura-Palma").textContent = Math.round(data.main.temp);
document.getElementById("Humedad-Palma").textContent = Math.round(data.main.humidity);
})

// API Menorca
fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.95&lon=4.11&appid=TU_API_KEY&units=metric&lang=es")
.then(response => response.json())
.then(data => {
  document.getElementById("Temperatura-Menorca").textContent = Math.round(data.main.temp);
  document.getElementById("Humedad-Menorca").textContent = Math.round(data.main.humidity);
});

// API Ibiza
fetch("https://api.openweathermap.org/data/2.5/weather?lat=38.98&lon=1.43&appid=TU_API_KEY&units=metric&lang=es")
.then(response => response.json())
.then(data => {
  document.getElementById("Temperatura-Ibiza").textContent = Math.round(data.main.temp);
  document.getElementById("Humedad-Ibiza").textContent = Math.round(data.main.humidity);
});


