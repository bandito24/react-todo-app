import React from "react"
import { useState } from "react"

export const EditTodo = ({todo, location, time, duration, allTodos, setAllTodos, id, setShowEdit, setTodo}) => {
    const [editedTodo, setEditedTodo] = useState('')
    const [editedTime, setEditedTime] = useState('')
    const [editedDuration, setEditedDuration] = useState('')
    const [editedLocation, setEditedLocation] = useState('')
    const updatedList = {
        todo: editedTodo ? editedTodo : todo,
        time: editedTime ? editedTime : time,
        location: editedLocation ? editedLocation : location,
        duration: editedDuration ? editedDuration : duration
    }
    
   const handleSubmit = (e) => {
    e.preventDefault();
     
   
    allTodos.splice(id, 1, updatedList)
    setAllTodos((prev) => [...prev])
    setShowEdit(false); 
    console.log(allTodos)
   }
    
    return(
    <div id='edit-todo'>
        <form id='form' onSubmit={handleSubmit}>
            <label htmlFor='todo'>Todo</label>
            <input
            defaultValue={todo}
            id='todo'
            type= 'text'
            onChange={(e) => setEditedTodo(e.target.value)}
            />
            <br/>
            <label htmlFor='time'>time</label>
            <input 
            defaultValue={time}
            type= 'time'
            id='time'
            onChange={(e) => setEditedTime(e.target.value)}
            />
            <br/>
            <label htmlFor='duration' id='label-duration'>duration</label>
            <input 
            defaultValue={duration}
            type='number'
            onChange={(e) => setEditedDuration(e.target.value)}
            min='0'
            />
            <br/>
            <label htmlFor='location' id='label-location'>Location</label>
            <input 
            id='location'
            defaultValue={location}
            type='text'
            onChange={(e) => setEditedLocation(e.target.value)}
            />
            
            <br/>
            <input 
            id='update-submit'
            type='submit'
            value='Update'
            />
        </form>
    </div>
    )
}