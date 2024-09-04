import React from 'react'

export default function TodoCard(props) {
    const {children, handleDelete, index, handleEdit} = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick = {() => { handleEdit(index) }}>
                    <i className="fa-regular fa-pen-to-square m-2"></i>
                </button>
                <button  onClick = {() => {handleDelete(index)}}>
                    <i className="fa-solid fa-trash m-2"></i>
                </button>
            </div>
        </li> 
    )
}
