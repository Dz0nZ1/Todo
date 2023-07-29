import './App.css'
import {useState} from "react";
import TodoTitle from "./TodoTitle.jsx";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import TodoEdit from "./TodoEdit.jsx";


const todo = [
    {
        id: 1,
        task: "Morning running",
        completed:false,
    },
    {
        id: 2,
        task: 'Read books',
        completed:false,
    },
    {
        id: 3,
        task: 'Go to gym',
        completed:false,
    }
]

function App() {
    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useState(todo);

    const [editMode, setEditMode] = useState(false);

    const [editedItem, setEditedItem] = useState({});

    // eslint-disable-next-line no-unused-vars
    const handleAddItems = (newItem) =>{
        setItems( items => [...items, newItem]);
        console.log(items);
    }

    function handleDeleteItem (id){
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    const maxId = todo.reduce((maxId, item) => {
        return item.id > maxId ? item.id : maxId;
    }, 0);

    function handleChangeItem (id){
        setItems((items) => items.map(item=> item.id === id ? {...item, completed: !item.completed} : item))
    }

    function handleEditItem (id, value){
        setItems((items) => items.map(item=> item.id === id ? {...item, task: value} : item))
        setEditMode(false);
    }

    const editItem = (id) => {
        setEditMode(true);
        const newItem =  items.find(item=> item.id === id);
        setEditedItem(newItem);
    }


    return (
       <>
           <div className="container d-flex justify-content-center flex-column">
               <TodoTitle/>
               {!editMode && <TodoInput onAddItems={handleAddItems} onMaxId={maxId}/>}
               {!editMode && <TodoList items={items} onDeleteItem={handleDeleteItem} onChangeItem={handleChangeItem} editItem={editItem}/>}
               {editMode && <TodoEdit editedItem={editedItem} onEditItem={handleEditItem}></TodoEdit>}
           </div>
       </>
    );
}

export default App
