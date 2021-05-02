import { useSelector } from 'react-redux';
import WeatheCard from './WeatherCard';

export default function MainWindow(props) {

  const { weather } = useSelector(({weather}) => weather);
  const { chosenCityIs } = useSelector(({ cities }) => cities);

  return (
    <div className="App__mainWindow">
      <h1 className="windowTitle">{chosenCityIs}</h1>
      <div className="cards">
        {weather.map(obj => (<WeatheCard key={obj.id} { ...obj }/>))}
      </div>
    </div>
  );
}
