import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getInputData } from '../redux/actions/inputData';
import { addCity } from '../redux/actions/cities';

export default React.memo(function InputAdd(props) {

const dispatch = useDispatch();
const { inputDataIs } = useSelector(({inputData}) => inputData);

const cityAdd = () => {

  if (inputDataIs !== '') {
    dispatch(addCity(inputDataIs));
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
