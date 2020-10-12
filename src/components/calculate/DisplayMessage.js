import React from 'react';

const DisplayMessage = ({sides}) => {
    switch (sides) {
        case 3:
            return(
                <p>The first 100 triangular numbers are:</p>
            );
            break;
        case 4:
            return(
                <p>The first 100 square numbers are:</p>
            );
            break;
        case 5:
            return(
                <p>The first 100 pentagonal numbers are:</p>
            );
            break;
        case 6:
            return(
                <p>The first 100 hexagonal numbers are:</p>
            );
            break;
        case 7:
            return(
                <p>The first 100 heptagonal numbers are:</p>
            );
            break;
        case 8:
            return(
                <p>The first 100 octagonal numbers are:</p>
            );
            break;
        case 9:
            return(
                <p>The first 100 nonagonal numbers are:</p>
            );
            break;
        case 10:
            return(
                <p>The first 100 decagonal numbers are:</p>
            );
            break;
        case 11:
            return(
                <p>The first 100 hendecagonal numbers are:</p>
            );
            break;
        case 12:
            return(
                <p>The first 100 dodecagonal numbers are:</p>
            );
            break;
        case 13:
            return(
                <p>The first 100 tridecagonal numbers are:</p>
            );
            break;
        case 14:
            return(
                <p>The first 100 tetradecagonal numbers are:</p>
            );
            break;
        case 15:
            return(
                <p>The first 100 pentadecagonal numbers are:</p>
            );
            break;
        case 16:
            return(
                <p>The first 100 hexadecagonal numbers are:</p>
            );
            break;
        case 17:
            return(
                <p>The first 100 heptadecagonal numbers are:</p>
            );
            break;
        case 18:
            return(
                <p>The first 100 octadecagonal numbers are:</p>
            );
            break;
        case 19:
            return(
                <p>The first 100 enneadecagonal numbers are:</p>
            );
            break;
        case 20:
            return(
                <p>The first 100 icosagonal numbers are:</p>
            );
            break;
        case 21:
            return(
                <p>The first 100 icosihenagonal numbers are:</p>
            );
            break;
        case 22:
            return(
                <p>The first 100 icosidigonal numbers are:</p>
            );
            break;
        case 23:
            return(
                <p>The first 100 icositrigonal numbers are:</p>
            );
            break;
        case 24:
            return(
                <p>The first 100 icositetragonal numbers are:</p>
            );
            break;
        default:
            if(sides !== ""){
            return(
                <p>The first 100 polygonal numbers with {sides} sides are:</p>
            );
            }
            else{
                return(<p></p>)
            }
            break;
    }
}

export default DisplayMessage;