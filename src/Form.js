import React from 'react'

export default function Form({value, setValue, handleSubmit}) {
    const handleChange = (e) => {
        setValue(e.target.value);
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex pt-2' >
              <input 
                type='text'
                name='value'
                className='w-full px-3 py-2 mr-4 text-grey-500 border rounded shadow'
                style={{flex:'10', padding:'5px'}}
                placeholder='
                Write your what to do'
                value={value}
                onChange={handleChange}
              />
              <input 
                className='p-2 text-purple-400 border-2 border-purple-400 rounded-md hover:text-white hover:bg-purple-400'       
                type='submit'
                value='입력'
              />
        </form>
    </div>
  )
}
