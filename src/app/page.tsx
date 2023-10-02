'use client'

import React, { useState } from 'react'
import { TodoObjects } from './models/Todo';
import { v4 as uuid } from 'uuid';

const Home: React.FC = () => { 
  // this is a function component
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoObjects[]>([]);

  const addTodo = () => {
    setTodos([{ id: uuid(), value: todo, done: false }, ...todos]); //change the order to make the list asscending or descending
    // setTodos([...todos, { id: "1", value: todo, done: false }]); //top add the values in an array of list
    setTodo("");  //to empty the input field after add
  }

  //create a mark done 
  const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done } : todo ))
  }

  return (
    <> 
    {/* using fragments tag here <> </>*/}
      <header className='bg-slate-950 p-4'>
        <h1 className='text-3xl'>Todos</h1>
      </header>
      <main className='p-4'>
        <h1 className='py-2 text-xl'>
          create a Todo list to keep track of things 
        </h1>
        <input 
          type="text" 
          placeholder='Enter a new Todo'
          className='p-2 rounded mr-5 text-slate-900'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button 
          className='border-2 p-2 rounded border-slate-900 text-slate-100'
          onClick={() => addTodo()}
        > 
          Add Todo
        </button>
        <ul className='mt-5'>
          {
            todos.map(todo => (
              <li
                onClick={() => markTodoDone(todo.id)} 
                className={`text-3xl ml-4 cursor-pointer ${todo.done ? 'line-through' : 'no-underline' }`}
              
              > {/* converted into template string using backticks `` */}
                {todo.value}
              </li>
            )) 
          }
        </ul>
      </main>
    </>
  )
}

export default Home;