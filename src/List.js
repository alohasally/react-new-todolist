import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


export default function List({todoData, setTodoData}) {
    // const btnStyle = {
    //     color: '#fff',
    //     border: 'none',
    //     padding: '5px 9px',
    //     borderRadius: '50%',
    //     cursor: 'pointer',
    //     float:'right',
    //   };
    // const getStyle = (completed) => {
    // return {
    //     padding: '10px',
    //     borderBottom: '1px #ccc dotted',
    //     textDecoration: completed ? 'line-through' : 'none',
    // }; }
   
   
    const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
    }

    const handleCompleteChane = (id) => {
        let newTodoData = todoData.map((data) => {
          if (data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        });
        setTodoData(newTodoData);
      };
      
      const handleEnd = (result) => {
        if(!result.destination) return;
        const newTodoData =todoData;

        // 1. 변경시키는 아이템을 배열에서 지워준다
        // 2. return 값으로 지워진 아이템을 잡아준다

        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        //원하는 자리에 reorderItem을 Insert 해준다
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
      }
      
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef }>
        {todoData.map((data, index)=> (
          <Draggable
           key = {data.id}
           draggableId={data.id.toString()}
           index={index}
           >
            {(provided, snapshot) => (
            <div 
                // style={getStyle(data.completed)} 
                key={data.id} {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps}>
                <div className={`${snapshot.isDragging ? 'bg-gray-400': 'bg-gray-100'}'flex items-center justify-between w-full px-4 py-1 my-2 text-gray-800 border rounded`}>
                  <div className='flex items-center '>
                    <input 
                      className='mr-2'
                      type='checkbox'
                      defaultChecked={false}
                      onChange={() => handleCompleteChane(data.id)}
                    />
                    <span className={ data.completed ? 'line-through' : undefined}><p>{data.title}</p></span>
                  </div>
                  <div className='items-center'>
                    <button
                      // style={btnStyle}
                      className='px-4 py-2 float-right'
                      onClick={() => handleClick(data.id)}
                    >
                      x
                    </button>
                  </div>  
                  
                </div>
            </div>
            )}
            </Draggable>
            ))}
            {provided.placeholder}
            </div>
            )}
            </Droppable>
            </DragDropContext>
    </div>
  )
}
