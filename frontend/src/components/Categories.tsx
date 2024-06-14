import React from 'react'
import {categoryList} from './../constants'
import { Link } from 'react-router-dom';

const Categories = () => {

  

  return (
    <div className='flex justify-evenly items-center p-3 h-fit m-2 overflow-hidden'>
        {categoryList.map((item,indx)=>(
          <Link key={indx} to={item.searchQueryName} className='w-fit h-24 mx-5 p-2 relative flex flex-col items-center'>
          <img src={item.imageLink} alt="category"/>
          <p className='text-lg'>{item.categoryName}</p>
        </Link>
        ))}
    </div>
  )
}

export default Categories