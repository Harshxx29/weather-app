const apiKEY="54351344782c06d7ff9ad3abfd954db3";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".searchbar input")
const searchbtn=document.querySelector(".searchbar button")
const weatherIcon=document.querySelector(".weather-icon")



async function checkweather(city){
    let response = await fetch(apiURL + city + `&appid=${apiKEY}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weatherdetails").style.display="none";
    }
    else{let data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
        document.querySelector(".windspeed").innerHTML=data.wind.speed + " Km/hr";
    
    
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Fog"){
            weatherIcon.src="images/mist.png"
        }

        document.querySelector(".weatherdetails").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }}



    
    searchbtn.addEventListener("click",()=>{
        checkweather(searchbox.value)
    })