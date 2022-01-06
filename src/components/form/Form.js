import React from 'react';
import './Form.css';
import _uniqueId from 'lodash/uniqueId';

const InputValue = ({ inputNumber, setInputNumber, numbers, setNumbers, sides, setSides }) => {
    // Control the input field
    const inputNumberHandler = (e) => {
        const intNum = Math.floor(parseInt(e.target.value));
        if (isNaN(e.target.value)) {
            setInputNumber("");
        }
        else if (e.target.value === "") {
            setInputNumber("");
        }
        else if (intNum <= 2) {
            setInputNumber("");
        }
        else if (intNum > 1000000) {
            setInputNumber(1000000);
        }
        else {
            setInputNumber(intNum);
        }
    };

    // Calculate and save the numbers in a array.
    const calculateNumbers = (e) => {
        e.preventDefault();
        const intSides = Math.floor(parseInt(inputNumber));
        let nums = [];
        for (let i = 1; i < 101; i++) {
            if (intSides === 3) {
                nums.push(
                    {
                        id: _uniqueId(),
                        n: (i * i + i) / 2
                    }
                )
            }
            else if (intSides > 3 && intSides <= 1000000) {
                nums.push(
                    {
                        id: _uniqueId(),
                        n: ((intSides - 2) * i * i - (intSides - 4) * i) / 2
                    }

                );
            }
        }
        setNumbers(nums);
        // Clear the input field
        setInputNumber("");
        // Save the input field in a separate state after you submit the form.
        setSides(inputNumber);
    };

    return (
        <form className="form" onSubmit={calculateNumbers}>
            <input className="form-control input" onChange={inputNumberHandler} value={inputNumber} type="number" placeholder='Nr.'></input>
            <button type="submit" className="btn btn-primary">Calculate</button>
        </form>
    );
};

export default InputValue;