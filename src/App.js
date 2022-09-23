import { useState } from 'react';
import './App.css';
import React from 'react';



function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] =useState();

  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right',
  };

  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  const handleChange = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
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

  const handleCompleteChane = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };



  return (
    <div className='Container'>
        <div className='`todoBlock`'>
            <div className='title'>
              <h1>To Do List</h1>
            </div>

            {todoData.map((data)=>
              <div style={getStyle(data.completed)} key={data.id}>
              <input
                type='checkbox'
                defaultChecked={false}
                onChange={() => handleCompleteChane(data.id)}
              />
              <h3>{data.title}</h3>
              <button
                style={btnStyle}
                onClick={() => handleChange(data.id)}
              >
                x
              </button>
            </div>
            )}

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