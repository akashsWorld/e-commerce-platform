import React from 'react'

const Button = ({className,content,onClick}:{className?:string,content:string,onClick:()=>void}) => {
  return (
    <button onClick={onClick} className={`h-12 w-24 inline-block p-2 m-4 cursor-pointer rounded-lg ${className}`}>{content}</button>
  )
}

export default Button