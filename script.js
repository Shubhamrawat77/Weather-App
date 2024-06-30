let search= document.querySelector("#search_icon");
let locationInput = document.querySelector("#location");
let all=document.querySelector(".main");




const apiKey='7e4e817811f24ca6ee5cf5121c06e475';
const url='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'


async function fetchData(cityName){

    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    if(response.status==404 || response.status==400){
      all.style.display='none'
      alert("please Enter valid City Name");
      
    }
    else{
      let data = await response.json();

      document.querySelector(".tempature").innerHTML=Math.round(data.main.temp)+ "°C";
      document.querySelector(".city_name").innerHTML=data.name;
      document.querySelector("#wind").innerHTML=data.wind.speed + " km/h";
      document.querySelector("#humidity").innerHTML=data.main.humidity + " %";
  
      let image=document.querySelector("img");
  
      if(data.weather[0].main==='Clouds'){
        image.src="../image/clouds.png"
      }
      else if(data.weather[0].main==='Rain'){
        image.src="../image/rain.png"
      }
      else if(data.weather[0].main==='Clear'){
        image.src="../image/sun.png"
      }
      else if(data.weather[0].main==='Snow'){
        image.src="../image/snow.png"
      }
      else if(data.weather[0].main==='Drizzle'){
        image.src="../image/drizzle.png"
      }
      else if(data.weather[0].main==='Mist' || data.weather[0].main==='Haze' || data.weather[0].main==='Dust' ){
        image.src="../image/mist.png"
      }
       all.style.display='block'  
    }
   
}


search.addEventListener("click", function(){
  let city = locationInput.value;
  fetchData(city);
  locationInput.value="";
})