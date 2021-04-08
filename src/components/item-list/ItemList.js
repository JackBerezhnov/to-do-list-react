import React from 'react';
import Item from "../item/Item";

const ItemList = ({ items, removeTodo }) => {
    return (
        <ul>
            {items.map(todo => (
                <Item key={todo.id} item={todo} removeTodo={removeTodo}/>
            ))}
        </ul>
    );
}

export default ItemList;