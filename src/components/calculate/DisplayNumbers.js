import React from 'react';
import DisplayMessage from './DisplayMessage';
import Number from './Number';
import './DisplayMessage.css';
import Images from '../images/Images';

const DisplayNumbers = ({numbers, sides}) => {
    if (numbers.length > 0) {
        return (
            <div  className="message container">
                <DisplayMessage sides={sides} />
                
                <Images  sides={sides} />
                
                <ul>
                    {numbers.map((nr) => (
                            <Number key={nr.id} number={nr.n} sides={sides} />
                        )
                    )}
                </ul>
            </div>
        );
    }
    else {
        return ("");
    }
}

export default DisplayNumbers;