//import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';
import { useEffect, useState } from 'react';

function Appnew() {
  const [item,setItem] = useState("");
  const [list,setList] = useState([]);
  const [updatedtodo, setUpdatedtodo] = useState(null)
  //const newArray = []
  const handleAddButton = () => { 
    setList(prevList => ([...prevList, { id: Date.now(), value:item, isCompleted:false }]));
    setItem("");
    }
  const handleToggle = (index) => {
    const todos = [...list];
    todos[index].isCompleted = !todos[index].isCompleted;
    setList(todos);
  }

  const handleDelete = (index) => {
    const newTodos = []
    const todos = [...list];
    todos.forEach((eachtodo,indexNew) => {
      if(index !== indexNew)
        newTodos.push(eachtodo)
    })
    // const newTodos = [...list]
    // newTodos.splice(index,1);
    setList(newTodos);
  }

  const handleEdit = (index, eachitem) => {
    setUpdatedtodo(eachitem)
  }

  useEffect( () => {
    if(updatedtodo)
      setItem(updatedtodo.value)
  },[updatedtodo])

  return (
    <div className="App">
        <h1>Welcome to To-Do</h1>
        <div>
          <input type='text' placeholder='Enter the item' value={item} onChange={(e) => setItem(e.target.value)}></input>
          {updatedtodo? <button>Update</button> : <button type='submit' onClick={handleAddButton}>Add</button>}
        </div>
        { updatedtodo ? <></> :
        <ul>
          {
            list?.map((eachitem,index) => {
              return(
                <li style={{listStyle:"none"}} key={eachitem.id}>
                  {/* <input type='checkbox' onClick={e => handleToggle(index)}/>
                  {eachitem.isCompleted ? <span style={{textDecoration :"line-through"}}>{eachitem.value}</span>: <span>{eachitem.value}</span>} */}
                  {eachitem.value} <button onClick={() => handleDelete(index)}>Delete</button><button onClick={() => handleEdit(index,eachitem)}>Edit</button>
                </li>
              )
            })
          }
        </ul>   
} 
    </div>
  );
}

export default Appnew;
