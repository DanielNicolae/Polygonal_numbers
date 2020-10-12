import React from 'react';
import './Images.css';

const Images = ({sides}) => {
    if (sides === 3) {
        return (
            <img className="images" src="./triangular-nums.png" />
        )
    }
    else if (sides === 4) {
        return (
            <img src="./square-nums.png" />
        )
    }
    else if (sides === 5) {
        return (
            <img src="./pentagonal-nums.png" />
        )
    }
    else if (sides === 6) {
        return (
            <img src="./hexagonal-nums.png" />
        )
    }
    else {
        return (<></>)
    }
};

export default Images;