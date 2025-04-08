# Прогноз погоды по геолокации

## Задача

1. Сделать fetch-запрос по адресу:
   `https://get.geojs.io/v1/ip/geo.json`
   Получить данные по широте (latitude), долготе (longitude) и городу.

2. Сделать fetch-запрос по адресу:
   `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`
   Заменить координаты в строке на данные из geo-запроса.

3. Получить данные погоды:

   - температура
   - скорость ветра
   - weathercode (он понадобится)

4. Написать функцию-расшифровщик для weathercode. Информация о кодах находится в документации в конце страницы `https://open-meteo.com/en/docs`. Используйте if/else или switch/case `https://www.w3schools.com/js/js_switch.asp`

5. Вывести данные на странице.
   Использовать `current_weather_units` из ответа.

6. Использовать лоадер из классной работы или любой другой.
   Поставить `setTimeout` на 1.5 сек, чтобы лоадер подольше крутился.

7. Задеплоить на GitHub Pages.


https://www.google.com/maps/@36.1111111,-5.11111111,15z?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D

{latitude: 52.52, longitude: 13.419998, generationtime_ms: 0.05054473876953125, utc_offset_seconds: 0, timezone: 'GMT', …}
current_weather
: 
{time: '2025-04-08T08:30', interval: 900, temperature: 9.3, windspeed: 5.3, winddirection: 62, …}
current_weather_units
: 
{time: 'iso8601', interval: 'seconds', temperature: '°C', windspeed: 'km/h', winddirection: '°', …}
elevation
: 
38
generationtime_ms
: 
0.05054473876953125
latitude
: 
52.52
longitude
: 
13.419998
timezone
: 
"GMT"
timezone_abbreviation
: 
"GMT"
utc_offset_seconds
: 
0
