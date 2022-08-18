import "./App.css";
import { useState } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


const Square = (props) => {
  return <div className="square">{props.hasKing ? <King /> : ""}</div>;
};

const King = () => {
  const [dragState, drag] = useDrag(() => ({
    type: "KING",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <span style={{ fontSize: 30, cursor: "pointer" }} ref={drag}>
      ♚
    </span>
  );
};

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", 1, ""],
    ["", "", ""]
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      {board.map((row, rowIdx) => {
        return (
          <div className="row" key={rowIdx}>
            {row.map((col, colIdx) => {
              return (
                <Square
                  key={colIdx}
                  hasKing={col === 1}
                  x={rowIdx}
                  y={colIdx}
                />
              );
            })}
          </div>
        );
      })}
    </DndProvider>
  );
}

export default App;
