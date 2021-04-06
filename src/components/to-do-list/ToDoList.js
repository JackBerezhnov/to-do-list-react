import React, { useState, useEffect } from 'react';
import Input from '../input/Input';
import ItemList from '../item-list/ItemList';
import {v4 as uuid, v4} from "uuid";


function ToDoList() {
    const [userInput, setUserInput] = useState("");
    const [toDoItems, setToDoItems] = useState([]);
    const [toDoItem, setToDoItem] = useState({
        id: "",
        description: "",
        complete: false
    })

    function handleChange(e) {
        setToDoItem({ ...toDoItem, description: e.target.value});
    }

    function addTodo(toDoItem) {
        setToDoItems([toDoItem, ...toDoItems])
    }

    function submitUserData(e) {
        e.preventDefault();
        if(toDoItem.task.trim()) {
            addTodo({ ...toDoItem, id: v4 });
        }
    }
    
    return(
        <div>
            <h1>To Do List!</h1>
            <form onSubmit={submitUserData}>
                <Input onChange={handleChange} todo={toDoItem}/>
                <button type="submit" className="btn success">Add</button>
                <ItemList items={toDoItems}/>
            </form>
            <p>{userInput}</p>
        </div>
    );
}

export default ToDoList;