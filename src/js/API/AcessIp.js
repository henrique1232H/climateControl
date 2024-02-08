export default async function AcessIp() {
    const endpoint = "http://ip-api.com/json/?lang=pt-BR";

    const response =  await fetch(endpoint);
    const responseJson = await response.json();


    return responseJson

}