import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const Item = ({ item, toggleComplete, removeTodo }) => {
    
    function handleCheckboxClick() {
        toggleComplete(item.id);
    }
    
    function handleRemoveClick() {
        removeTodo(item.id);
    }

    return(
        <ListItem style={{ display: "flex" }}>
            <Checkbox
                checked={item.complete}
                type="checkbox" 
                onClick={handleCheckboxClick} 
            />
            <Typography
                variant="body1"
                style={{
                    color: "black",
                    textDecoration: item.complete ? "line-through" : null
                }}
            >
            {item.description}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Item;