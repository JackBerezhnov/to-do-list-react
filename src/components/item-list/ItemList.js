import React from 'react';
import Item from "../item/Item";

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map(todo => (
                <Item key={todo.id} value={todo}/>
            ))}
        </ul>
    );
}

export default ItemList;