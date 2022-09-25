import { useState, useCallback } from 'react';
import './App.css';
import React from 'react';
import Lists from './components/Lists';
import Form from './components/Form'

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

function App() {
  const [todoData, setTodoData] = useState([initialTodoData]);
  const [value, setValue] =useState();

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData)
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  }, [todoData]);


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
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue('');
  };

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-purple-200 '>
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg md:max-w-md' >
            <div className='flex justify-between mb-3'>
              <h1 className='text-2xl font-bold text-gray-600'>To Do List</h1>
              <button onClick={handleRemoveClick}>Delete All</button>
            </div>
          
          <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>

          <Form value = {value} setValue={setValue} handleSubmit={handleSubmit} 
              />
          
        </div>
    </div>
  );
}

export default App;