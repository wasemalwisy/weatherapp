let weather = {
  apiKey: "2a273bab49ad9888b39e5925ec1561f7",
  fetchWeather: function (city) {
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" +  city +  "&units=metric&appid=" + this.apiKey ) .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
          console.log("no weather");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
   let weather = {
  apiKey: "2a273bab49ad9888b39e5925ec1561f7",
  fetchWeather: function (city) {
    fetch( "https://api.openweathermap.org/data/2.5/weather?q=" +  city +  "&units=metric&appid=" + this.apiKey ) .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
          console.log("no weather");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+name+"')";
  },
  search: function () {
    let text = ".search-bar";
  let result = text.replace(/^\s+|\s+$/gm,'');
    this.fetchWeather(document.querySelector(result).value);
  },
};

document.querySelector(".search button").addEventListener("click",function(){weather.search();});

document .querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

let show = {
  apiKey: "4n1ueawop2tenevy",
  fetchWeather: function () {
    fetch( "https://api.ipregistry.co/?key=" +  this.apiKey ) .then((response) => {
        if (!response.ok) {   
          console.log("Empty"); 
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
  
    if(data.location.city ==null)
    {  
     weather.fetchWeather("Aleppo");  
    }
    else
    {
      weather.fetchWeather(data.location.city);
    }
  
  }, 
};
 
  show.fetchWeather();
  },
  search: function () {
    let text = ".search-bar";
  let result = text.replace(/^\s+|\s+$/gm,'');
    this.fetchWeather(document.querySelector(result).value);
  },
};

document.querySelector(".search button").addEventListener("click",function(){weather.search();});

document .querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

let show = {
  apiKey: "4n1ueawop2tenevy",
  fetchWeather: function () {
    fetch( "https://api.ipregistry.co/?key=" +  this.apiKey ) .then((response) => {
        if (!response.ok) {   
          console.log("Empty"); 
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
  
    if(data.location.city ==null)
    {  
     weather.fetchWeather("Aleppo");  
    }
    else
    {
      weather.fetchWeather(data.location.city);
    }
  
  }, 
};
 
  show.fetchWeather();
