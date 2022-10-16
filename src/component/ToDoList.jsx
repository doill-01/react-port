import { useState } from "react";
import React from "react";


const ToDoList = () => {



	  const [todo, setToDo] = useState("");
	  const [toDos,setToDos] = useState([]);
	
	  const deleteBtn = index => {
		setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
		};
	
	
	  const onChange = (event) => setToDo(event.target.value);
	  const onSubmit = (event) => {
	  event.preventDefault();
	if(todo === "") {
		return;
	}
	
	setToDo("");
	setToDos(currentArray=>[todo,...currentArray])
	};
	
	
	
	console.log(toDos);
	  
	  
	 
	  return (
		<div className="todolist">
			<h1>My To Dos({toDos.length})</h1>
			<form onSubmit={onSubmit} className="b">
		  <input onChange={onChange} value={todo} type="text" placeholder="입력" style={{width:"100px",margin:"20px"}}/>
		  <button style={{margin:"0px",cursor:"pointer"}}>클릭</button>
		  </form>
		  <hr/>
		  <br/>
		  <br/>
		  <ul>
		  {toDos.map((item,index)=>
		  <li key={index}>{item}<button onClick={() => deleteBtn(index)}>❌</button></li>
		  )}
		  </ul>
	
		  
		</div>
	
	  );
	}	


export default ToDoList;
