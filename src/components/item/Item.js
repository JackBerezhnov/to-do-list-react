import React from 'react';

const Item = ({ item, toggleComplete, removeTodo }) => {
    
    function handleCheckboxClick() {
        toggleComplete(item.id);
    }
    
    function handleRemoveClick() {
        removeTodo(item.id);
    }

    return(
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={handleCheckboxClick} />
            <li
                style={{
                    color: "white",
                    textDecoration: item.complete ? "line-through" : null
                }}
            >{item.description}</li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Item;