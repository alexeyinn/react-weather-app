export default function DefaultCity(props) {

    return (
        <ul className="list">
          <li className="active">
            <h1>{props.defaultCity}</h1>
          </li>
        </ul>
    )
}
