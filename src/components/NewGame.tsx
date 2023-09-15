import React, { useState } from 'react';
import Start from './Start';
import Game from './Game';


const NewGame = () => {
    const [gameStart, setGameStart] = useState(false)

    let pageToDisplay = null
    if (gameStart === false) {
        pageToDisplay =
            <React.Fragment>
                <Start />
                <button onClick={() => setGameStart(true)}>Start New Game</button>
            </React.Fragment>
    }
    else {
        pageToDisplay = <Game />
    }
    return (
        <React.Fragment>
            { pageToDisplay }
        </React.Fragment>
    );
}

export default NewGame;