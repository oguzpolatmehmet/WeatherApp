// api 
const apiKey = "13b1a078ca346204a4ad66c6a75acfa3";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`
// ${cityName}&appid=${apiKey}
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${sayi1}&lon=${sayi2}`;


const city = document.getElementById('cityInput')
const searchButton = document.getElementById('searchBtn')
const weatherIcon = document.querySelector('.weather-icon')
const weatherDescription = document.querySelector('.weatherDesc')

// search click event
searchButton.addEventListener('click', ()=>{
    // console.log(city.value)
    checkWeather();
    city.value = ""
})


async function checkWeather(){
    const response = await fetch(apiUrl+city.value+`&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "KM";


    if(data.weather[0].main === 'Clear'){
        weatherIcon.src = "images/clear.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = "images/clouds.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = "images/mist.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else if(data.weather[0].main === 'Snow'){
        weatherIcon.src = "images/snow.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else if(data.weather[0].main === 'Wind'){
        weatherIcon.src = "images/wind.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = "images/rain.png"
        weatherDescription.innerHTML = data.weather[0].description
    }else{
        weatherIcon.src = "images/computer.png"
        weatherDescription.innerHTML = "Something Wrong!"
    }
}



