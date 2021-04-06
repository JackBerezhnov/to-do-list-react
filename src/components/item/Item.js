import React from 'react';

const Item = ({ value }) => {
    return(
        <div>
            <input type="checkbox"/>
            <li>{value.description}</li>
            <button>X</button>
        </div>
    );
}

export default Item;