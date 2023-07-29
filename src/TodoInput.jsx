import {useState} from "react";
import Button from "./Button.jsx";

export default function TodoInput({onAddItems, onMaxId}){

    const [item, setItem] = useState("");
    const [id, setId] = useState(onMaxId + 1)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!item) return;

        setId((id) => id + 1)
        const newTodo = {
            id : id,
            task: item
        }

        onAddItems(newTodo);
        setItem("");


    }

    return(
        <form className="d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
            <input className="form-control" type="text" placeholder="Add item..." value={item} onChange={(e) => setItem(e.target.value)}/>
            <button className="btn btn-primary form-control mt-3 mb-3">Add</button>
        </form>
    )

}