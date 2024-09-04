import React from 'react'

export default function TodoInput(props) {
    const {handleNewTodo, todoValue, setTodovalue} = props
    
    return (
        <header>
            <input value = {todoValue} onChange={(e) => {
                setTodovalue(e.target.value)
            }} placeholder='add to do item....' />
            <button onClick={() => {
                handleNewTodo(todoValue)
                setTodovalue("")
            }}>Add</button>
        </header>
        
    )
}
