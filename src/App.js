import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-left">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="ultimatum" />
        </main>
        <footer className="App-footer text-center">
          <small>
            This application is built with Bootstrap and React framework by Linn
            Forsman.
          </small>
        </footer>
      </div>
    </div>
  );
}
