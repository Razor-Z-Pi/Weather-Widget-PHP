$city = $_GET['city'];
$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=ВАШ_КЛЮЧ";
echo file_get_contents($apiUrl);