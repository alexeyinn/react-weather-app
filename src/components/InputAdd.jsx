import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getInputData } from '../redux/actions/inputData';

export default React.memo(function InputAdd(props) {
//const [inputData, setInputData] = useState("");

const dispatch = useDispatch();
const { inputDataIs } = useSelector(({inputData}) => inputData);

const cityAdd = () => {
  function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
    }
    return splitStr.join(' '); 
 }
const niceViwedData = titleCase(inputDataIs);

  if (inputDataIs !== '') {
    props.setCustomCity([...props.customCity, niceViwedData]);
    dispatch(getInputData(''));
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
            value={inputDataIs}
            onInput={e => dispatch(getInputData(e.target.value))}
            onKeyDown={e => e.key === 'Enter' ? cityAdd() : ''}
          ></input>
          <button className="button" onClick={cityAdd}>Добавить</button>
        </div>
    )
})
