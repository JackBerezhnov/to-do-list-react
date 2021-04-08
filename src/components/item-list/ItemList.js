import React from 'react';
import Item from "../item/Item";

const ItemList = ({ items, toggleComplete, removeTodo }) => {
    return (
        <ul>
            {items.map(todo => (
                <Item key={todo.id} item={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            ))}
        </ul>
    );
}

export default ItemList;