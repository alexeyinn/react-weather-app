export default function MainWindow(props) {
  return (
    <div className="App__mainWindow">
      <h1 className="windowTitle">{props.defaultCity}</h1>
      <div className="cards">
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: 18 + "rem" }}
        >
          <div className="card-header">Погода</div>
          <div className="card-body">
            <h1 className="card-title">{props.currentWeather}</h1>
          </div>
        </div>
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: 18 + "rem" }}
        >
          <div className="card-header">Температура воздуха</div>
          <div className="card-body">
            <h1 className="card-title">
              {props.currentTemp}<sup>o</sup>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
