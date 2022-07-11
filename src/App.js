import "./App.css";
import Square from "./component/square";
import styled from "styled-components";
import React, { useState } from "react";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);

  
  const handlePlay = (index) => {
    const temp = board.slice();
    if (caculateWinner(temp) || temp[index]) {
      return;
    }

    if (xPlayer) {
      temp[index] = "X";
    } else {
      temp[index] = "O";
    }
    setBoard(temp);
    setXPlayer(!xPlayer);
    return
  };




  const winner = caculateWinner(board);
  const status = 'Next player: ' + (xPlayer ? 'X' : 'O');

  return (
    
    <div>
    <div className="status">{status}</div>
      {winner ? winner : null}
      
      <Board>
        {board.map((item, index) => (
          <Square
            value={item}
            handlePlay={() => handlePlay(index)}
            key={index}
          />
        ))}
      </Board>
      {winner ? <a href="/"><button>Reset</button>
</a> : null}
    </div>
  );
}
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  width: 300px;
  height: 300px;
  margin-top: 40px;
  padding: 10px;
`;
const caculateWinner = (board) => {
  const winLine = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winLine.length; i++) {
    const [a, b, c] = winLine[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  let checkNull = board.some(function (item) {
    return item === null;
});
  return checkNull ? null : 'Draw'; 
};
export default App;