const show = document.getElementById('show-weather');


async function getWeatherDetails(city) {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=a631e1e5b48cd37e87f8123460fe88e6';
  const response = await fetch(url, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  });
  
  showWeather(response, capitalizeLetter(city));
}

function capitalizeLetter(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return str;
}

function cToF(celsius) {
  const fahr = celsius*9/5 + 32;
  return fahr;
}

function fToC(fahr) {
  const cel = (fahr - 32)*5/9;
  return cel;
}

function showWeather(data, city) {
  const name = document.getElementById('show-name');
  const temp = document.getElementById('show-temp');
  const condition = document.getElementById('show-condition');
  const humid = document.getElementById('show-humid');
  const pressure = document.getElementById('show-pressure');

  name.innerText = city;
  temp.innerText = parseInt(data.main.temp - 273) + '\xB0C';
  condition.innerText = data.weather[0].description;
  humid.innerText = 'Humidity: ' + data.main.humidity;
  pressure.innerText = 'Pressure: ' + data.main.pressure;
  document.getElementById('show-weather').style.display = 'block';
}

const btn = document.getElementById('search-btn');
btn.onclick = (e) => {
  e.preventDefault();
  const city = document.getElementById('cityname').value;
  getWeatherDetails(city);
};
