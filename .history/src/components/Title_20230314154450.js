import "../styles/title.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import {db} from '../firebase';
import { collection, query, orderBy, onSnapshot, QuerySnapshot } from "firebase/firestore";

function Title() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState ([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setTasks(QuerySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data,
      })))
    })
  },[])

  return (
    <div className="title">
      <header>Todo App</header>
      <div className="title__container">
        <button onClick={() => setOpenAddModal(true)}>New Task +</button>
        <div className="title">
          {tasks.map((todo) => (
            <TodoList
            id={todo.id}
            key={todo.id}
            completed={todo.data.completed}
            title={todo.title}
            description={todo.data.description}/>
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default Title;
