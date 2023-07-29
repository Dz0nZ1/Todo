import {useState} from "react";

export default function TodoEdit({editedItem, onEditItem}){


    const [item, setItem] = useState({
        id: editedItem.id,
        task: editedItem.task,
        completed: editedItem.completed
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditItem(item.id, item.task);
    }

   return (
       <form onSubmit={handleSubmit}>
           <input className="form-control mt-5 mb-3" type="text" value={item.task} onChange={(e) => setItem({...item, task: e.target.value})}/>
           <button className="btn btn-primary form-control">update</button>
       </form>
   )
}