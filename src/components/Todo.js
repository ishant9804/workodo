import DeleteIcon from "@mui/icons-material/Delete";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.js";
import './todo.css';

const Todo = ({ arr }) => {
    return (
        <List className='todo_list' >
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo} />
            </ListItem>
            <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'todos', arr.id)) }} />
        </List>
    )
}

export default Todo;
