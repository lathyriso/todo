import React from 'react'
import TodoCard from './TodoCard'


export default function TodoList(props) {
    const {todo} = props
    return (
        <ul className='main'>
            {todo.map((item, itemIndex) => {
                return (
                    <TodoCard {...props} keys={itemIndex} index={itemIndex} >
                        <p className= " text-2xl font-bold ">{item}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )

}
