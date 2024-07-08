import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../../helpers/checkWinner";
import './Grid.css'
function Grid({numberofCards}){
  const[board,setBoard] = useState(Array(numberofCards).fill(""))
  const[turn, setTurn] = useState('true')
  const[winner,setWinner] = useState(null)
  

  function play(index) {
    if (winner || board[index]) return; // Prevent playing if the game is over or the cell is already filled
    const newBoard = [...board];
    newBoard[index] = turn ? 'O' : 'X';
    setBoard(newBoard);

    const win = isWinner(newBoard, turn ? 'O' : 'X');
    if (win) {
      setWinner(win);
    } else {
      setTurn(!turn);
    }
  }
  function reset(){
     setBoard(Array(numberofCards).fill(""))
     setTurn(true)
     setWinner(null)
  }
  return(
        <div className="grid-wrapper">
             {
              winner &&(
               <>
                <h1 className="turn-highlight">Winner is:{winner}</h1>
                <button className="reset" onClick={reset}>Reset Game</button>
               </>
              )

             }

             {
              !winner && !Array(numberofCards).fill(null) &&(
                <>
                <h1 className="turn-highlight">Tie! Please start Again</h1>
                 <button className="reset" onClick={reset}>Reset Game</button>
                </>
              ) 
             }
           <h1 className="turn-highlight">Current Turn:{(turn)?'O':'X'}</h1>
           <div className="Grid">
               {board.map((el,idx) =>{
                return <Card key={idx} onPlay={play}  player ={el} index = {idx}/>;
               })} 
           </div> 
        </div>
  );
}

export default Grid;
