import '..styles/todomanager.css'
import TodoList from './components/TodoList'
import AddTodo from './AddTodo'
import {useState} from 'react'

function TodoManager() {

  const [openAddModal, setOpenAddModal] = useState(false)

  /* function to get all tasks from firestore in realtime */ 
  

  return (
    <div className='todoManager'>
      <header>Todo Manager</header>
      <div className='todoManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='todoManager__todos'>
          <TodoList
            id={1}
            title='READ A BOOK' 
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          />
          <TodoList
            id={2}
            title='COMPLETE A REACT BUILD' 
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          />
        </div>
      </div>

      {openAddModal &&
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TodoManager