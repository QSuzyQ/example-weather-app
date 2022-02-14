import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Okinawa" />
        <footer>
          This project is coded by Suzana Kešerac as taught by Matt Delac on
          SheCodes Workshop and is{" "}
          <a
            href="https://github.com/QSuzyQ/example-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
