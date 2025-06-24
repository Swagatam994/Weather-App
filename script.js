        const apiKey="f9f4fe4163881f01802fbd18c77f56f5";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
		const searchbox=document.querySelector(".search input");
		const searchbtn=document.querySelector(".search button");
      const image=document.querySelector(".weather-icon");
	  

        async function checkweather(city) {
            const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
			if(response.status==404){
				document.querySelector(".error").style.display="block";
				document.querySelector(".weather").style.display="none";
			}
			else{
            var data=await response.json();
            console.log(data);
            
            document.querySelector(".location").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%"+"<p>Humidity</p>";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/h <p>Wind Speed<p>";
			const weather=data.weather[0].main;
            if(weather=="Clouds"){
				image.src="clouds.png";
			}
			else if(weather=="Clear"){
				image.src="clear.png";
			}
			else if(weather=="Drizzel"){
				image.src="Drizzel.png";
			}
			else if(weather=="Mist"){
				image.src="mist.png";
			}
			else if(weather=="Rain"){
				image.src="rain.png";
			}
			else {
				image.src="snow.png";
			}

			console.log(weather);
			
          document.querySelector(".weather").style.display="block";
		  document.querySelector(".error").style.display="none";
		}
   }
		searchbtn.addEventListener("click",()=>{
			checkweather(searchbox.value);

		})

        