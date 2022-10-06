import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';
import './Game.css';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null)) 

    const [queue, setQueue] = useState(true) 

    const winner = calculateWinner(board) 

    const handleChange = (index) => {  
        
        const boardCopy = [...board] 

        if(winner || boardCopy[index]) return 

        boardCopy[index] = queue ? 'X' : 'O'
        setBoard(boardCopy)
        setQueue(!queue)
    }

    const startNewGame = () => {
        return (
            <button className='start_btn' 
            onClick={() => setBoard(Array(9).fill(null))}> 
            Очистить поле 
            </button>
        )
    }
    
    return (
        <div className='wrapper'>
            { startNewGame() }   
            // здесь мы выводим 
            <Board 
            squares={board} 
            click={handleChange}
            />   
            <p className='game_info'> 
                { winner ? 'Победитель ' + winner : 'Сейчас ходит ' + ( queue ? 'X' : 'O' ) }  
            </p> 
        </div>
    );
}

export default Game;
