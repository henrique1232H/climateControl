import AcessIp from "./AcessIp.js";
import option from "./option.js"

export default async function meteoblue() {
    const {lat, lon} = await AcessIp();

    const endpoint = `http://my.meteoblue.com/packages/basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=nAglUR246JzVjoq1`;

    const meteoblue = await fetch(endpoint, option);

    const response = await meteoblue.json();
    
    return response

}