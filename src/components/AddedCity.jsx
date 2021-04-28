export default function AddedCity(props) {

    return (
        <ul className="list">
          {(props.customCity.length !== 0) ? (props.customCity.map((cities) => (
            <li className="active" key={cities}>
            <h2>{cities}</h2>
          </li>
          ))) : (
            <li className="active">
            <h2>Здесь будут ваши добавленные города...</h2>
          </li>
          )}
        </ul>
    )
}
