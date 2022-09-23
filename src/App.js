import { useState } from 'react';
import './App.css';
import React from 'react';
import List from './List';



function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] =useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

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
    <div className='Container'>
        <div className='`todoBlock`'>
            <div className='title'>
              <h1>To Do List</h1>
            </div>
          
          <List todoData={todoData} setTodoData={setTodoData}/>

            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
              <input
                type='text'
                name='value'
                style={{flex:'10', padding:'5px'}}
                placeholder='
                Write your what to do'
                value={value}
                onChange={handleChange}
              />
              <input 
                type='submit'
                value='입력'
                className='btn'
                style={{flex: '1'}}
              />
            </form>
        </div>
    </div>
  );
}

export default App;