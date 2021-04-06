import React from 'react';

const Item = (props) => {
    return(
        <div>
            <li>{props.value.description}</li>
            <button>X</button>
        </div>
    );
}

export default Item;