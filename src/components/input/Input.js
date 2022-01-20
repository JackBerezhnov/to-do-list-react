import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './Input.css';

const Input = (props) => {
    return (
        <div className="input-container">
            {console.log(props)}
            <TextField 
                type="text"
                name="toDo"
                id="toDoInput"
                value={props.todo.task}
                placeholder="Enter a thing what you need to do..."
                onChange={e => props.onChange(e)}
            />
            <Button type="submit" className="btn success" variant="contained" color="primary">Add</Button>
        </div>
    );
}

export default Input;