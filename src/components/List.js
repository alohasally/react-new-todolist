import React, {useState} from 'react'

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
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const handleCompleteChane = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem('todoData', JSON.stringify(newTodoData));
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = todoData.map((data)=>{
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    };
    setIsEditing(false);
  

  if (isEditing) {
    return (
      <div className={`bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-800 border rounded`}
          >
        <div className='flex items-center '>
          <form onSubmit={handleSubmit}>
          <input 
            value={editedTitle}
            className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          </form>
        </div>  
        <div className='items-center'>
          <button
            // style={btnStyle}
            className='px-2 float-right bg-gray-300 rounded-full ml-3 text-white font-bold '
            onClick={() => setIsEditing(false)}
          >
            x
          </button>
          <button
            // style={btnStyle}
            className='px-2 float-right bg-gray-300 rounded-full ml-3 text-white font-bold '
            type='submit'
            onClick={handleSubmit}
          >
            save
          </button>
        </div>
      </div>
    );
    } else {
      return (
        <div 
        // style={getStyle(data.completed)} 
        key={id} 
            {...provided.droppableProps} 
            ref={provided.innerRef} 
            {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? 'bg-gray-400': 'bg-gray-100'}' flex items-center justify-between w-full px-4 py-1 my-2 text-gray-800 border rounded`}
            >
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
            <button
              // style={btnStyle}
              className='px-2 float-right bg-gray-300 rounded-full ml-3 text-white font-bold '
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  
  
});

export default List