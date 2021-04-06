import React from 'react';
import './Input.css';
import ToDoList from '../to-do-list/ToDoList';

const Input = (props) => {
    return (
        <div>
            {console.log(props)}
            <input 
                type="text"
                name="toDo"
                id="toDoInput"
                value={props.todo.task}
                placeholder="Enter a thing what you need to do..."
                onChange={e => props.onChange(e)}
            />
        </div>
    );
}

export default Input;