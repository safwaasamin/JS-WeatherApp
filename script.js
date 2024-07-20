async function fetchWeatherData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=12.790361&lon=78.716606&zip=635802&city=Ambur&state=Tamilnadu&country=India';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fb0f0f98e5msh6ec6b26e8d8b71ap19a411jsn5eaf824ce155',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        console.log('Making API call...');
        const response = await fetch(url, options);
        console.log('Status Code:', response.status);

        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.status);
        }

        // Assuming the API returns JSON data
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

// Call the function
fetchWeatherData();
