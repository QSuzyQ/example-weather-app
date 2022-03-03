import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <Weather defaultCity="Okinawa" />
        <footer>
          This project is coded by{" "}
          <a href="https://github.com/QSuzyQ" target="_blank" rel="noreferrer">
            Suzana Kešerac
          </a>{" "}
          as taught on{" "}
          <a href="https://shecodes.io" target="_blank" rel="noreferrer">
            SheCodes Workshop
          </a>{" "}
          and is{" "}
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
