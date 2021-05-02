export default function WeatheCard({ weatherDescription, weatherData}) {
    return (
    <div
          className="card text-dark bg-light mb-3"
        >
          <div className="card-header">{weatherDescription}</div>
          <div className="card-body">
            <h1 className="card-title">
              {weatherData}
            </h1>
          </div>
        </div>
        )
}