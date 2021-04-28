export default function InputAdd() {
    return (
        <div className="add-list">
          <input
            className="field"
            type="text"
            placeholder="Введите название города:"
            value=""
          ></input>
          <button className="button">Добавить</button>
        </div>
    )
}
