import React from 'react';
import TextField from "@material-ui/core/TextField";

const Input = (props) => {
    return (
        <div>
            {console.log(props)}
            <TextField 
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