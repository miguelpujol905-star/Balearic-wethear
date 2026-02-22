
fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.571111&lon=2.651667&appid=61a8f88ebfe982ef3e5a18707129382e&units=metric&lang=es")
.then(response => response.json())
.then(data => {
document.getElementById("Temperatura").textContent = Math.round(data.main.temp);
document.getElementById("Humedad").textContent = Math.round(data.main.humidity);
})



fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.95&lon=4.11&appid=61a8f88ebfe982ef3e5a18707129382e&units=metric&lang=es")
.then(response => response.json())
.then(data => {
document.getElementById("Temperatura1").textContent = Math.round(data.main.temp);
document.getElementById("Humedad1").textContent = Math.round(data.main.humidity);
})




