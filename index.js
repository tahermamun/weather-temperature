
document.getElementById('search-btn').addEventListener('click', function () {

    const locationSearch = document.getElementById('location-input').value;
    const locationAddress = document.getElementById('location-address');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');



    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationSearch + '&appid=0493e236ca29d54b8bedbdb3b099e8f5')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            locationAddress.innerText = data.name //Location Name Print
            let temperatureCelsius = Math.round(data.main.temp -273.15) //Temperature Convert Kelvin to Celsius
            temperature.innerText = temperatureCelsius //Temperature Print
            weatherDescription.innerText = data.weather[0].main //Weather Status Print

        })
})