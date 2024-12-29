// https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=london&days=3

// let searchInput = document.querySelector('#searchInput')
// let weatherData;


// searchInput.addEventListener('input', function () {

//     if (searchInput.value.length > 3) {

//         startApp(searchInput.value)

//     }


// })

// async function startApp(city) {
//     weatherData = await getData(city)
//     todayWeather()
//     tomorrowWeather()
//     afteromorrowWeather()
// }



// async function getData(city) {
//     let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=${city}&days=3`)
//     let data = await response.json()
//     return data
// }


// function todayWeather() {
//     let date = new Date(weatherData.location.localtime)
//     document.querySelector('.today .day').innerHTML = date.toLocaleDateString('en-us', { weekday: 'long' })
//     document.querySelector('.today .date').innerHTML = date.toLocaleDateString('en-us', { day: '2-digit' })
//     document.querySelector('.today .dayAMonth').innerHTML = date.toLocaleDateString('en-us', { month: 'short' })

//     document.querySelector('.today .city').innerHTML = weatherData.location.name
//     document.querySelector('.today .degree').innerHTML = weatherData.current.temp_c + 'C'
//     document.querySelector('.today #todayImg').setAttribute('src', 'https:' + weatherData.current.condition.icon)
//     document.querySelector('.today .weatherCondition').innerHTML = weatherData.current.condition.text
//     document.querySelector('.today #winds').innerHTML = weatherData.current.wind_mph + 'km/h'

// }

// function tomorrowWeather() {
//     let date = new Date(weatherData.forecast.forecastday[1].date)
//     document.querySelector('.tomorrow .day').innerHTML = date.toLocaleDateString('en-us', { weekday: 'long' })

//     document.querySelector('.tomorrow #tomImg').setAttribute('src', 'https:' + weatherData.forecast.forecastday[1].day.condition.icon)
//     document.querySelector('.tomorrow #maxTemperature').innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_c
//     document.querySelector('.tomorrow #minTemperature').innerHTML = weatherData.forecast.forecastday[1].day.mintemp_c
//     document.querySelector('.tomorrow #weatherCondition').innerHTML = weatherData.forecast.forecastday[1].day.condition.text
// }

// function afteromorrowWeather() {
//     let date = new Date(weatherData.forecast.forecastday[2].date)
//     document.querySelector('.after-tomorrow .day').innerHTML = date.toLocaleDateString('en-us', { weekday: 'long' })

//     document.querySelector('.after-tomorrow #afterimage').setAttribute('src', 'https:' + weatherData.forecast.forecastday[2].day.condition.icon)
//     document.querySelector('.after-tomorrow #AftertomorrowmaxTemperature').innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_c
//     document.querySelector('.after-tomorrow #AftertomorrowminTemperature').innerHTML = weatherData.forecast.forecastday[2].day.mintemp_c
//     document.querySelector('.after-tomorrow #AftertomorrowweatherCondition').innerHTML = weatherData.forecast.forecastday[2].day.condition.text
// }



// navigator.geolocation.getCurrentPosition( position=>{

//     livelocation = position.coords.latitude+','+position.coords.longitude
//     console.log(livelocation);
        
//     startApp(livelocation)
    
// } )



let searchInput = document.getElementById("searchInput")
let weatherData ; 




searchInput.addEventListener("input", function(){
    if(searchInput.value.length > 3){

        startApp(searchInput.value)
    }
  
})

async function startApp(city){
    weatherData = await getData(city) 
    todayWeather()
    tomorrowWeather()
    afteromorrowWeather()
    console.log(weatherData);
       // return Data 
}


async function getData(city){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=${city}&days=3`);
    let data =  await response.json(); 

    return data
}


function todayWeather(){
    document.querySelector(".today .city").innerHTML = weatherData.location.name
    document.querySelector(".today .degree").innerHTML = weatherData.current.temp_c + "C";
    document.getElementById("todayImg").setAttribute("src" , "https:"+weatherData.current.condition.icon) 
    document.querySelector(".today .weatherCondition").innerHTML = weatherData.current.condition.text
    document.querySelector(".today #winds").innerHTML = weatherData.current.wind_mph + " Km/h"
}

function tomorrowWeather(){
  document.querySelector(".tomorrow #tomImg").setAttribute("src" , "https:"+weatherData.forecast.forecastday[1].day.condition.icon)
  document.querySelector(".tomorrow .maxTemperature").innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_c + "C"
  document.querySelector(".tomorrow .minTemperature").innerHTML = weatherData.forecast.forecastday[1].day.mintemp_c   + "C"
  document.querySelector(".tomorrow .weatherCondition").innerHTML = weatherData.forecast.forecastday[1].day.condition.text
}

    

function afteromorrowWeather() {

    document.querySelector('.after-tomorrow #afterimage').setAttribute('src', 'https:' + weatherData.forecast.forecastday[2].day.condition.icon)
    document.querySelector('.after-tomorrow #AftertomorrowmaxTemperature').innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_c
    document.querySelector('.after-tomorrow #AftertomorrowminTemperature').innerHTML = weatherData.forecast.forecastday[2].day.mintemp_c
    document.querySelector('.after-tomorrow #AftertomorrowweatherCondition').innerHTML = weatherData.forecast.forecastday[2].day.condition.text
}

    
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords);
    liveLocation = position.coords.latitude+','+position.coords.longitude
    startApp(liveLocation)
    
})




// let x = "ahmed"
// console.log(x.length);
