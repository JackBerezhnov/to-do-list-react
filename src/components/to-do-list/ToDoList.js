import { useState } from 'react';
import Input from '../input/Input';
import ItemList from '../item-list/ItemList';


function ToDoList() {
    const [userInput, setUserInput] = useState("");
    const [toDoItems, setToDoItems] = useState([""]);
    const [toDoItem, setToDoItem] = useState({
        id: "",
        description: "",
        complete: false
    })

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    function submitUserData() {
        setToDoItems(userInput);
    }
    
    return(
        <div>
            <h1>To Do List!</h1>
            <Input onChange={handleChange}/>
            <button value="Send" className="btn success" onClick={submitUserData}>Add</button>
            <ItemList items={toDoItems}/>
            <p>{userInput}</p>
        </div>
    );
}

export default ToDoList;