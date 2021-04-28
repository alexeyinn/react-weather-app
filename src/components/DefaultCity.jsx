import axios from 'axios';

export default function DefaultCity(props) {

const backToDefaultCity = (e) => {
  props.setChosenCity(e.target.outerText);

  axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${e.target.outerText}&lang=ru&units=metric&APPID=b71aa60c6985f035c25ba94fec60b0f3`
        )
        .then((res) => {
          const weatherData = res.data.weather[0].description;
          const niceViewWeatherData =
            weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
          props.setCurrentWeather(niceViewWeatherData);
          props.setCurrentTemp(Math.floor(res.data.main.temp) + " C");
        })
        .catch(() => {
          alert("Не получили прогногз погоды от сервера! Проверьте название города и попробуйте его добавить снова в список отслеживания!");
        });
}

    return (
        <ul className="list" onClick={backToDefaultCity}>
          <li className="active">
            <h1>{props.defaultCity}</h1>
          </li>
        </ul>
    )
}
