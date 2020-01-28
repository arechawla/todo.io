import React, { useState } from 'react';
import TodoInput from './TodoInput.js'
import {CSSTransition} from 'react-transition-group'

//Another functional component here: We will use the arrow function
const TodoForm = () => {


    //This is our initial input variable (initial state) for the TodoInput.js component
    const blankInput = {name: ""};


    //We are using a hook here:
    // userState(args) returns an array of our variable with its initial state value, args, as well as a function that we will use to update the state from now on
    const [inputState, setInputState] = useState([
        { ...blankInput },
    ]);
    //blankinput is our initial state that we assign to inputState
    //setInput state is a function that we will use to update inputState over time


    


    //Creates a new input with our old input state plus a blank input
    const addInput = () => {
        setInputState([...inputState, { ...blankInput }]);
    };

    
    const handleInputChange = (e) => {
        const updatedInputs = [...inputState];
        updatedInputs[e.target.dataset.idx][e.target.className] = e.target.value;
        
        setInputState(updatedInputs);
    };

    const handleInputDelete = (e) => {
        //Get index of element
        var index = e.target.dataset.idx;
        inputState.splice(index, 1); //Remove the element in question from the array
        const updatedInputs = [...inputState];
        setInputState(updatedInputs);

    };

    const handleInputChecked = (e) => {
        
    }

    return (
        <form>
            <input
                type="button"
                value="Add New Todo"
                onClick={addInput}
            />
            {
                inputState.map((val, idx) => (
                    <CSSTransition
                        in={true}
                        appear={true}
                        exit={true}
                        timeout={300}
                        classNames="fade"
                        >
                        <TodoInput
                        key={`input-${idx}`}
                        idx={idx}
                        inputState={inputState}
                        handleInputChange={handleInputChange}
                        handleInputDelete={handleInputDelete}
                    />
                    </CSSTransition>
                    
                ))
            }
            <input type="submit" value="Clear All" />
        </form>
    );
};

export default TodoForm;


