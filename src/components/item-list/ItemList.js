import React from 'react';
import Item from "../item/Item";
import List from "@material-ui/core/List";

const ItemList = ({ items, toggleComplete, removeTodo }) => {
    return (
        <List>
            {items.map(todo => (
                <Item key={todo.id} item={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            ))}
        </List>
    );
}

export default ItemList;