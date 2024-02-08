import AcessIp from "./API/AcessIp.js";
import meteoblue from "./API/meteoblue.js";

export default async function showInformation() {
    const responseMeteoBlue = await meteoblue();
    const {city, region} = await AcessIp();
    const date = new Date();

    const heat = document.querySelectorAll(".heat");
    let value = 0;

    console.log(responseMeteoBlue)
    
    const weather = {
        climateMean: responseMeteoBlue.data_day.temperature_mean,
        climateMax: responseMeteoBlue.data_day.temperature_max,
        climateMin: responseMeteoBlue.data_day.temperature_min
    }

    heat.forEach(entries => {
      entries.textContent = `${Math.floor(weather.climateMean[value])}ºC`
      value++

    })



    const newWeather = weather.climateMean.filter(entries => entries !== weather.climateMean[0]);
    



    if(weather.climateMean[0] <= 25) {
        document.documentElement.classList.remove("sun");
        document.documentElement.classList.remove("rain");
        document.documentElement.classList.add("cloud");
    }


    if(weather.climateMean[0] <= 15) {
        document.documentElement.classList.add("rain")
        document.documentElement.classList.remove("cloud");
        document.documentElement.classList.remove("sun");
    }

    const windspeed = responseMeteoBlue.data_day.windspeed_mean;
    
    document.querySelector("h2").textContent = `${city}, ${region}`;

    if(await AcessIp()) {
        document.querySelector("body").classList.remove("loading")
    }

    
}