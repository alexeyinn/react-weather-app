import { MainWindow, DefaultCity, AddedCity, InputAdd } from "./components";

function App() {
  // const onRes = () => {
  //   axios
  //     .get(
  //       "http://api.openweathermap.org/data/2.5/weather?q=%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&lang=ru&units=metric&APPID=b71aa60c6985f035c25ba94fec60b0f3"
  //     )
  //     .then((res) => console.log(res.data));
  // };

  return (
    <div className="App">
      <div className="App__sidebar">
        <DefaultCity />
        <AddedCity />
        <InputAdd />
      </div>
      <MainWindow />
    </div>
  );
}

export default App;
