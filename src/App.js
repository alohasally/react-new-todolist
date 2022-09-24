import { useState } from 'react';
import './App.css';
import React from 'react';
import List from './List';
import Form from './Form'


function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] =useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      complete: false 
    };

    //원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };


  return (
    <div className='flex items-center justify-center w-screen h-screen bg-purple-200 '>
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg md:max-w-md' >
            <div className='flex justify-between mb-3'>
        
              <h1 className='text-2xl font-bold text-gray-600'>To Do List</h1>
            </div>
          
          <List todoData={todoData} setTodoData={setTodoData}/>

          <Form value = {value} setValue={setValue} handleSubmit={handleSubmit} 
              />
          
        </div>
    </div>
  );
}

export default App;