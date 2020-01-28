import React, { useState } from 'react';
import { format } from 'util';
import PropTypes from 'prop-types';


//We are creating a functional component here instead of a full-fledged class component
const TodoInput = ({ idx, inputState, handleInputChange, handleInputChecked }) => {

    //Instance variables for each input component
    const inputID = `name-${idx}`; //Will need ID to keep track of which input is which
    const checkID = `ch-${idx}`; //idx will be handled on the form side, it is an input to this component function

    const initStrike = false;
    
    //Let strike be part of the state of this compnent
    const [strike, setStrike] = useState(initStrike);
    
    const handleClick = () => {
        setStrike(!strike);
    }

    return (
        <div key={`input-${idx}`}> 
            <label htmlFor={inputID}>{`Todo #${idx + 1}`}</label>
            <input
                type="text"
                name={inputID}
                data-idx={idx}
                id={inputID}
                
                style = {{textDecoration: strike ? 'line-through' : 'none', backgroundColor: strike? '#32a869' : 'white'}}
                className="name"
                value={inputState[idx].name}
                onChange={handleInputChange}
            />
            
            <input 
                type = "checkbox" 
                data-idx={idx}
                id={checkID}
                onClick={handleClick}
            />

            
            
        </div>
    );
};

TodoInput.propTypes = {
    idx: PropTypes.number,
    inputState: PropTypes.array,
    handleInputChange: PropTypes.func,
};

export default TodoInput;