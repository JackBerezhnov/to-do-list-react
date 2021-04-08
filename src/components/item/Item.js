import React from 'react';

const Item = ({ item, removeTodo }) => {
    function handleRemoveClick() {
        removeTodo(item.id);
    }

    return(
        <div>
            <input type="checkbox"/>
            <li>{item.description}</li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Item;