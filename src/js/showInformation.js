import AcessIp from "./API/AcessIp.js";
import meteoblue from "./API/meteoblue.js";
import checkDate from "./checkDate.js";
import CheckI from "./checkI.js";

export default async function showInformation() {
    const responseMeteoBlue = await meteoblue();
    const {city, region} = await AcessIp();
    const FunctionDate = new Date();
    const heat = document.querySelectorAll(".heat");
    const moreDay = document.querySelectorAll(".moreDays h4");
    const moreDayI = document.querySelectorAll(".moreDays i");

    let value = 0;

    console.log(responseMeteoBlue);

    
    const weather = {
        climateMean: responseMeteoBlue.data_day.temperature_mean,
        climateMax: responseMeteoBlue.data_day.temperature_max,
        climateMin: responseMeteoBlue.data_day.temperature_min
    }
    
    heat.forEach(entries => {
        entries.textContent = `${Math.round(weather.climateMean[value])}ºC`
        value++
        
    })

    const time = responseMeteoBlue.data_day.time;
    
    value = 0

    moreDay.forEach(entries => {

        const dayEntries = new Date(time[value]);;
        const day = dayEntries.getDay();

        checkDate(day, entries);
        value++
    })
    
    
    const minMax = document.querySelectorAll(".minMax h4");
    minMax[0].textContent = `${weather.climateMin[0]}ºC`;
    minMax[1].textContent = `${weather.climateMax[0]}ºC`;



    value = 0

    moreDayI.forEach(entries => {
        CheckI(entries, responseMeteoBlue.data_day.precipitation_probability[value])
        value++

    })

    if(weather.climateMean[0] <= 25) {
        document.documentElement.classList.remove("sun");
        document.documentElement.classList.remove("rain");
        document.documentElement.classList.add("cloud");
        document.documentElement.classList.remove("night");
    }


    if(weather.climateMean[0] <= 15) {
        document.documentElement.classList.add("rain")
        document.documentElement.classList.remove("cloud");
        document.documentElement.classList.remove("sun");
        document.documentElement.classList.remove("night");
    }

    if(FunctionDate.getHours() >= 19 || FunctionDate.getHours() <= 5) {
        document.documentElement.classList.remove("rain")
        document.documentElement.classList.remove("cloud");
        document.documentElement.classList.remove("sun");
        document.documentElement.classList.add("night");
    }

    const windspeed = responseMeteoBlue.data_day.windspeed_mean;
    const relativeHumidity = responseMeteoBlue.data_day.relativehumidity_mean;

    document.querySelector(".vent").textContent = `${windspeed[0]}km/h`

    document.querySelector(".probability").textContent = `${relativeHumidity[0]}%`
    
    document.querySelector("h2").textContent = `${city}, ${region}`;

    if(await AcessIp()) {
        document.querySelector("body").classList.remove("loading")
    }

    
}