import React, { useState } from 'react'

export default React.memo(function InputAdd(props) {
const [inputData, setInputData] = useState("");

const cityAdd = () => {
  function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
    }
    return splitStr.join(' '); 
 }
const niceViwedData = titleCase(inputData);

  if (inputData !== '') {
    props.setCustomCity([...props.customCity, niceViwedData]);
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
            onKeyDown={e => e.key === 'Enter' ? cityAdd() : ''}
          ></input>
          <button className="button" onClick={cityAdd}>Добавить</button>
        </div>
    )
})
