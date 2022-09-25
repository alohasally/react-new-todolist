import React from 'react'

const List = React.memo(({
  id, 
  title, 
  completed, 
  todoData, 
  setTodoData, 
  provided, 
  snapshot,
  handleClick 
}) => {
  

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
    <div 
    // style={getStyle(data.completed)} 
    key={id} 
        {...provided.droppableProps} 
        ref={provided.innerRef} 
        {...provided.dragHandleProps}>
    <div className={`${snapshot.isDragging ? 'bg-gray-400': 'bg-gray-100'}'flex items-center justify-between w-full px-4 py-1 my-2 text-gray-800 border rounded`}>
      <div className='flex items-center '>
        <input 
          className='mr-2'
          type='checkbox'
          defaultChecked={false}
          onChange={() => handleCompleteChane(id)}
        />
        <span className={ completed ? 'line-through' : undefined}><p>{title}</p></span>
      </div>  
      <div className='items-center'>
        <button
          // style={btnStyle}
          className='px-2 float-right bg-gray-300 rounded-full ml-3 text-white font-bold '
          onClick={() => handleClick(id)}
        >
          x
        </button>
      
      </div>
    </div>
</div>
  )
});

export default List