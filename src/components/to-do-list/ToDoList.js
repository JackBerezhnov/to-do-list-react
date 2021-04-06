import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        setToDoItems(toDoItem);
    }, [toDoItem]);

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    function submitUserData(e) {
        e.preventDefault();
        setToDoItem(userInput);
    }
    
    return(
        <div>
            <h1>To Do List!</h1>
            <form onSubmit={submitUserData}>
                <Input onChange={handleChange}/>
                <button type="submit" className="btn success">Add</button>
                <ItemList items={toDoItems}/>
            </form>
            <p>{userInput}</p>
        </div>
    );
}

export default ToDoList;