import MainWindow from "./components/MainWindow";

function App() {
  //http://api.openweathermap.org/data/2.5/weather?q=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&lang=ru&units=metric&APPID=b71aa60c6985f035c25ba94fec60b0f3
  return (
    <div className="App">
      <div className="App__sidebar">
        <ul className="list">
          <li className="active">
            <h1>Город по умолчанию</h1>
          </li>
        </ul>
        <ul className="list">
          <li className="active">
            <h2>Добавленные города</h2>
          </li>
        </ul>
        <div className="add-list">
          <input
            className="field"
            type="text"
            placeholder="Введите название города:"
            value=""
          ></input>
          <button className="button">Добавить</button>
        </div>
      </div>
      <MainWindow />
    </div>
  );
}

export default App;
