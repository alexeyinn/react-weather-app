function App() {
  return (
    <div className="App">
      <div className="App__sidebar">
        <ul className="list">
          <li className="active">Город по умолчанию</li>
        </ul>
        <ul className="list">
          <li className="active">Добавленные города</li>
        </ul>
        <div className="add-list">
          <input
            className="field"
            type="text"
            placeholder="Введите название города:"
            value=""
          ></input>
          <button class="button">Добавить</button>
        </div>
      </div>
      <div className="App__mainWin">Выбранный город</div>
    </div>
  );
}

export default App;
