async function getWeather() {
  const city = document.getElementById('city').value;
  const response = await fetch(`weather.php?city=${city}`);
  const data = await response.json();
  document.getElementById('result').innerHTML = `Температура: ${Math.round(data.main.temp - 273.15)}°C`;
}