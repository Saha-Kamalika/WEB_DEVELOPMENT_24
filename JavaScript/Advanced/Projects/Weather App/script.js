let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_temperature = document.querySelector(".weather_temp");
let w_icon = document.querySelector(".weather_icon");
let w_minTemp = document.querySelector(".weather_min");
let w_maxTemp = document.querySelector(".weather_max");
let feels = document.querySelector(".weather_feelslike");
let humidity = document.querySelector(".weather_humidity");
let winds = document.querySelector(".weather_wind");
let pressure = document.querySelector(".weather_pressure");

const getCountryName = (code)=>{
    return new Intl.DisplayNames([code], {type:"region"}).of(code);
}
const getDateTime = (dt) =>{
    const cur = new Date(dt*1000);
    const options ={
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(cur);
}
let city = "kolkata";
let citySearch = document.querySelector(".weather_search");
citySearch.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName = document.querySelector(".city_name");
    city=cityName.value;
    getWeatherData();
    cityName.value="";
})
const getWeatherData = async () =>{
    try{
        const setHeader={
            headers:{
                Accept: "application/json"
            }
        }
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b61c8dcf26b5f83b8aecb3967a7d390`, setHeader)
        const data = await res.json();
        console.log(data);
        const {main,name,weather,wind,sys,dt}=data;
        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = getDateTime(dt);

        w_forecast.innerHTML = weather[0].main;
        w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/>`;
        w_temperature.innerHTML = `${main.temp}&#176`;
        w_minTemp.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
        w_maxTemp.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;
        feels.innerHTML = `${main.feels_like.toFixed()}&#176`;
        humidity.innerHTML = `${main.humidity}%`;
        winds.innerHTML = `${wind.speed} m/s`;
        pressure.innerHTML = `${main.pressure} hPa`;

    }catch(err){
        console.log(err);
    }
}
getWeatherData();