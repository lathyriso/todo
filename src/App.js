import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';
import { useEffect, useState } from 'react';
//import TodoCard from './TodoCard';

function App() {
  const [todoValue, setTodovalue] = useState("")

  const [todo, setTodo] = useState([])
  
  function persistData(newList) {
    localStorage.setItem('todo', JSON.stringify({ todo: newList }))
  }

  function handleNewTodo (newTodo) {

    const updateList = [...todo, newTodo]
    persistData(updateList)
    setTodo(updateList)
    
  }

  function handleDelete (index) {
    const updateList = todo.filter((item, itemIndex) => {
      return itemIndex !== index
    })
    persistData(updateList)
    setTodo(updateList)
    
  
    
  }

  function handleEdit (index) {
    const updateInput = todo[index]
    setTodovalue(updateInput)
    handleDelete(index)
    
  }

  useEffect(() => {
    if (!localStorage){
      return
    }
    let localList = localStorage.getItem('todo')

    if (!localList){
      return
    }
    localList = JSON.parse(localList).todo
    setTodo(localList)
    
  }, [])
  return (
    <>
      <TodoInput handleNewTodo={handleNewTodo} todoValue={todoValue} setTodovalue={setTodovalue} />
      <TodoList todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
