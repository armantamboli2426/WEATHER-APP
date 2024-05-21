const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const key="574ee3515cdb35f72ead35a372052af3";
const searchbox=document.querySelector(".search-box input");
const searchbtn=document.querySelector(".search-box button");
async function checkweather(city){
const response=await fetch(url+city+`&appid=${key}`);
var data=await response.json();
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
document.querySelector(".humiddity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click", () => {
    const city = searchbox.value;
    if (city) {
        checkweather(city);
    } else {
        alert("Please enter a city name.");
    }
});