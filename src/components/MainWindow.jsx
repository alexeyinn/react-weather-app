import { useSelector } from 'react-redux';

export default function MainWindow(props) {

  const { tempIs, weatherIs } = useSelector(({weather}) => weather);

  return (
    <div className="App__mainWindow">
      <h1 className="windowTitle">{props.chosenCity}</h1>
      <div className="cards">
        <div
          className="card text-dark bg-light mb-3"
        >
          <div className="card-header">Погодные условия</div>
          <div className="card-body">
            <h1 className="card-title">{weatherIs}</h1>
          </div>
        </div>
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: 18 + "rem" }}
        >
          <div className="card-header">Температура воздуха</div>
          <div className="card-body">
            <h1 className="card-title">
              {tempIs}<sup>o</sup>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
