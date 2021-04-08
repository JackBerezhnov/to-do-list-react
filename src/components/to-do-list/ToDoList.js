import React, { useState } from 'react';
import Input from '../input/Input';
import ItemList from '../item-list/ItemList';
import { v4 as uuidv4} from "uuid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function ToDoList() {
    const [toDoItems, setToDoItems] = useState([]);
    const [toDoItem, setToDoItem] = useState({
        id: "",
        description: "",
        complete: false
    })

    function handleChange(e) {
        setToDoItem({ ...toDoItem, description: e.target.value});
    }

    function toggleComplete(id) {
        setToDoItems(
            toDoItems.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                return todo;
            })
        );
    }

    function addTodo(toDoItem) {
        setToDoItems([toDoItem, ...toDoItems])
    }

    function removeTodo(id) {
        setToDoItems(toDoItems.filter(todo => todo.id !== id));
    }

    function submitUserData(e) {
        e.preventDefault();
        if(toDoItem.description.trim()) {
            addTodo({ ...toDoItem, id: uuidv4() });
            setToDoItem({ ...toDoItem, description: "" });
        }
    }
    
    return(
        <div>
            <Typography variant="h1">
                To Do List
            </Typography>
            <form onSubmit={submitUserData}>
                <Input onChange={handleChange} todo={toDoItem}/>
                <Button type="submit" className="btn success" variant="contained" color="primary">Add</Button>
                <ItemList items={toDoItems} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            </form>
        </div>
    );
}

export default ToDoList;