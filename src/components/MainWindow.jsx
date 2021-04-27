export default function MainWindow() {
  return (
    <div className="App__mainWindow">
      <h1 className="windowTitle">Выбранный город</h1>
      <div className="cards">
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: 18 + "rem" }}
        >
          <div className="card-header">Погода</div>
          <div className="card-body">
            <h1 className="card-title">Небольшая облачность</h1>
          </div>
        </div>
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: 18 + "rem" }}
        >
          <div className="card-header">Температура воздуха</div>
          <div className="card-body">
            <h1 className="card-title">
              13 C<sup>o</sup>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
