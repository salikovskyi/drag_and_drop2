import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="app">
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" draggable="true">
          <p>card 1</p>
        </Card>
        <Card id="card-2" className="card" draggable="true">
          <p>card 2</p>
        </Card>
      </Board>
      <Board id="board-2" className="board">
        <Card id="card-3" className="card" draggable="true">
          <p>card 3</p>
        </Card>
        <Card id="card-4" className="card" draggable="true">
          <p>card 4</p>
        </Card>
      </Board>
    </div>
  );
}

export default App;
