
const ItemList = (props) => {
    return (
        <div>
        
        {console.log("Data", props)}
            <ul>
                <li>{props.items}</li>
            </ul>
        </div>
    );
}

export default ItemList;