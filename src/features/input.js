import React, { useEffect, useState } from "react";
import { Todo } from "./todo";

export function Input() {
    const [todo, setTodo] = useState('')
    const [time, setTime] = useState('')
    const [duration, setDuration] = useState('')
    const [location, setLocation] = useState('')
    const [allTodos, setAllTodos] = useState([])

    


    const handleSubmit = (e) => {
        e.preventDefault();
        setAllTodos([...allTodos,
            {
            todo: todo,
            time: time ? time : 'No Time Specified',
            duration: duration ? duration : 'No Duration Specified',
            location: location ? location : 'No Location Specified'
            }
        ])
        setTodo('')
        setTime('')
        setDuration('')
        setLocation('')
    }


    return (
        <div id='input-container'>
            <label id="question" htmlFor='text'>What would you like to get done today?</label>
            <br/>
        <form id='input-form' onSubmit={handleSubmit}>
           
            <input 
            value={todo} 
            className='input-value'
            name='todo' 
            placeholder='Enter To-do' 
            type='text' 
            onChange={e => setTodo(e.target.value)}
            required
            />
          
            
            <input 
            value={time} 
            className='input-value'
            name='time' 
            type='time' 
            placeholder='Enter Time of activity' 
            onChange={e => setTime(e.target.value) }
            />

            <input 
            value={duration}
            className='input-value'
            name='duration' 
            type='number' 
            placeholder='Enter duration in hours' 
            min='0'
            onChange={e => setDuration(e.target.value) }
            />  
          
            <input 
            value={location} 
            className='input-value'
            name='location' 
            type='text' 
            placeholder='Enter location of activity' 
            onChange={e => setLocation(e.target.value) }
            />
            <br/>
           <input 
           type='submit'
           value='Add To-do'
           id="submit"
           />
        </form>

        {allTodos.map((todo, index) => (
            <Todo 
            key={index}
            id={index}
            todo={todo.todo}
            time={todo.time}
            duration={todo.duration}
            location={todo.location}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            setTodo={setTodo}
            />
        ))
       }

        </div>

    )

}