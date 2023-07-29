import TodoItem from "./TodoItem.jsx";
import {useState} from "react";
import TodoEdit from "./TodoEdit.jsx";

// eslint-disable-next-line react/prop-types
export default function TodoList({items, onDeleteItem, onChangeItem, editItem}) {
    return(
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col">Check if done</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {items.map(item => {
                    return(
                        <TodoItem key={item.id} item={item} onDeleteItem={onDeleteItem} onChangeItem={onChangeItem} editItem={editItem}/>
                    )
                })}
                </tbody>
            </table>
           </>
    );
}
