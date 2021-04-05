import { useState } from 'react';
import Input from '../input/Input';

function ToDoList() {
    const [userInput, setUserInput] = useState("");

    function handleChange(e) {
        setUserInput(e.target.value);
    }
    
    return(
        <div>
            <h1>To Do List!</h1>
            <Input onChange={handleChange}/>
            <p>{userInput}</p>
        </div>
    );
}

export default ToDoList;