import React, { useState } from 'react'

export default React.memo(function InputAdd(props) {
const [inputData, setInputData] = useState("");

const cityAdd = () => {
  if (inputData !== '') {
    props.setCustomCity([...props.customCity, inputData]);
    setInputData('');
  } else {
    alert('Название не может быть пустым! Введите корректное название города!')
  }
}

    return (
        <div className="add-list">
          <input
            className="field"
            type="text"
            placeholder="Введите название города:"
            value={inputData}
            onInput={e => setInputData(e.target.value)}
          ></input>
          <button className="button" onClick={cityAdd}>Добавить</button>
        </div>
    )
})
