import React, { useEffect } from "react";

import { checkWin } from "../helpers/helpers";

const FinalMessage = ( { correctLetters, wrongLetters, selectedWord, setPlayable, playAgain } ) => {
    let popupMessage = '';
    let popupMessageRevealWord = '';
    let playable = true;

    if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        popupMessage = "Congratulations! You've won a day in the sun!";
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        popupMessage = "Oh no! You've lost! Better luck next time!"
        popupMessageRevealWord = `...the Beach Day Word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));

    return (
        <div className="popup-container" style={popupMessage !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2>{popupMessage}</h2>
                <h3>{popupMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
}

export default FinalMessage;