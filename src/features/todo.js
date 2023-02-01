import React from "react";
import { useState } from "react";
import {EditTodo} from './editTodo'

export const Todo = (props) => {
const { todo, location, time, duration, allTodos, setAllTodos, id} = props

const [showEdit, setShowEdit] = useState(false)

const handleRemove = (e) => {
    let i = e.target.id
    const toRemove = allTodos.splice(i, 1)
    setAllTodos(allTodos.filter(todos => todos !== toRemove))
}


    return(
<div>
     <div id='todos-flex'>
        <div className='todo-container'>
                <p className='todo'>{todo}</p>
        </div>
        <div className='todo-container'>
                <p className='todo'>{time}</p>
        </div>
        <div className='todo-container'>
                <p className='todo'>{duration} hours</p>
        </div>
        <div className='todo-container'>
                <p className='todo'>{location}</p>
        </div>
        <div className='todo-container'>
                <button className='button' id={id} onClick={() => setShowEdit(prev => !prev)}>Edit</button>
        </div>
        <div className='todo-container'>
                <button className='button' id={id} onClick={handleRemove}>Remove</button>
        </div>
    </div>
    {showEdit && <EditTodo 
    todo={todo}
    id={id}
    time={time}
    duration={duration}
    location={location}
    allTodos={allTodos}
    setAllTodos={setAllTodos}
    setShowEdit={setShowEdit}
    />}
</div>
    )


}