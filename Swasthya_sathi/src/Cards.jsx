import React from 'react'


const Cards = ({name,city,age,prof}) => {




  return (
     <div className='bg-blue-600 text-black inline-block p-6 items-center rounded-2xl py-2 m-3'>
     
     <h1> name : { name}</h1>
     <h2>city :{city} </h2> 
     <h2> age :{age} </h2>
     <h2>Profession : {prof}</h2>
    
     <button className='bg-green-600 p-1 rounded my-3 '>Add friend </button>
     </div>
  )
}

export default Cards