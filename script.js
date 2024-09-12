const apiKey = "e0cafbfa1e9c5d873627651f80a9f113";

async function checkWeather() {
    const city = document.getElementById("cityInput").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    document.getElementById("city").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("windSpeed").textContent = `${data.wind.speed} km/h`;

    // Adjust weather icon based on condition
    const weatherCondition = data.weather[0].main.toLowerCase();
    let weatherIcon = "images/default.png"; // Default fallback icon

    switch (weatherCondition) {
        case "clear":
            weatherIcon = "images/clear.png";
            break;
        case "clouds":
            weatherIcon = "images/clouds.png";
            break;
        case "drizzle":
            weatherIcon = "images/drizzle.png";
            break;
        case "rain":
            weatherIcon = "images/rain.png";
            break;
        case "snow":
            weatherIcon = "images/snow.png";
            break;
        case "mist":
            weatherIcon = "images/mist.png";
            break;
        
    }
    document.getElementById("weatherIcon").src = weatherIcon;
}

// Add event listener for Enter key
document.getElementById("cityInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkWeather();
    }
});
