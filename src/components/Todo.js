import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import './todo.css';

const Todo = ({ arr }) => {
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
        </List>
    )
}

export default Todo;