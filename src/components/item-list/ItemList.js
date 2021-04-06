import React from 'react';
import Item from "../item/Item";

const ItemList = (props) => {
    return (
        <div>
        {console.log("Data", props)}
            <ul>
                <Item value={props.items}/>
            </ul>
        </div>
    );
}

export default ItemList;