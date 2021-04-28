import React, { useState } from 'react'

export default React.memo(function InputAdd(props) {
const [inputData, setInputData] = useState("");

const cityAdd = () => {
  inputData !== '' ? props.setCustomCity([...props.customCity, inputData]) : alert('Название не может быть пустым! Введите корректное название города!');
}

    return (
        <div className="add-list">
          <input
            className="field"
            type="text"
            placeholder="Введите название города:"
            value={props.inputData}
            onInput={e => setInputData(e.target.value)}
          ></input>
          <button className="button" onClick={cityAdd}>Добавить</button>
        </div>
    )
})
