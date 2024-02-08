import AcessIp from "./API/geoIpify.js";
import option from "./API/option.js";


const key = "1da9d85d70ac54c913119939b7728d63" 

const keyIP = "at_4aTHE50mFch0y6X5M3aHzDayVNRGx";
const keyApiip = "0bf760db-d135-4be5-ba83-f2cbdc918138";


const ip = await AcessIp();
console.log(ip)

if(await AcessIp()) {
    document.querySelector("body").classList.remove("loading")
}

document.querySelector("h2").textContent = `${ip.city}, ${ip.region}`;


// fetch(`http://my.meteoblue.com/packages/basic-1h_basic-day?lat=${ip.lat}&lon=${ip.lon}&apikey=nAglUR246JzVjoq1`, option)
// .then(data => data.json())
// .then(response => console.log(response))
