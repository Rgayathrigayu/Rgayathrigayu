const apiKey = 'e0ed2b6a9d404bf1796794acd9250673';



async function getWeather() {

    const city = document.getElementById('cityInput').value;

    if (!city) {

        alert('Please enter a city name');

        return;

    }



    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(`City not found`);

        }



        const data = await response.json();

        displayWeather(data);

    } catch (error) {

        alert(error.message);

    }

}



function displayWeather(data) {

    const weatherDetails = document.getElementById('weatherDetails');

    const { name, main, weather } = data;



    weatherDetails.innerHTML = `

        <h2>${name}</h2>

        <p>${weather[0].description}</p>

        <p>🌡️ Temperature: ${main.temp}°C</p>

        <p>💧 Humidity: ${main.humidity}%</p>

        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon" />

    `;

}
