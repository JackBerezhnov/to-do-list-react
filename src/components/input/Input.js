import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div>
            {console.log(props)}
            <input 
                type="text"
                name="toDo"
                id="toDoInput"
                placeholder="Enter a thing what you need to do..."
                onChange={e => props.onChange(e)}
            />
        </div>
    );
}

export default Input;