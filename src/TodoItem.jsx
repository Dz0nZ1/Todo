// eslint-disable-next-line react/prop-types
import "./index.css"
// eslint-disable-next-line react/prop-types
export default function TodoItem({item, onDeleteItem, onChangeItem, editItem}){

    return(
        <tr>
    <th scope="row">{item.id}</th>
    <td style={item.completed ? {textDecoration: 'line-through'} : {}}>{item.task}</td>
    <td style={item.completed ? {color: "green"} : {color: "red"}}>{item.completed? "Completed" : "Incomplete"}</td>
    <td><input type="checkbox" value={item.completed} onChange={() => onChangeItem(item.id)}/></td>
    <td>
        <button className="btn btn-sm btn-danger" onClick={() => onDeleteItem(item.id)}>Delete</button>
    </td>
            {!item.completed ? <td> <button className="btn btn-sm btn-warning" onClick={() => editItem(item.id)}>Edit</button></td>
            : <td><button onClick={() => alert(`Good job! You finished ${item.task}`)} className="btn btn-sm" style={{color: '#fff', backgroundColor:"green"}}>Done</button></td>}
     </tr>
    );
}