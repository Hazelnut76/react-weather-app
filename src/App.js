import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrap">
          <div className="weather-app">
            <form id="search-form" className="mb-4">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Current"
                    className="btn btn-success w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">Harare</h1>
              <ul>
                <li>
                  Updated on <span id="date">Mon, Sep, 18, 2023 14:51</span>
                </li>
                <li id="description">Clear</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Cloudy icon"
                    class="weather-icon float-left"
                  />
                  <div>
                    <strong id="temperature">25</strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">39</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">4</span>km/h
                  </li>
                  <li>
                    Feels like: <span id="feeling">27</span>°C
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/Hazelnut76/vanilla-weather-app"
              target="_blank"
            >
              Open-source code,
            </a>
            by Emmah Nyashanu
          </small>
        </div>
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}
