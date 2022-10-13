// Components
import { useState } from 'react'
import { PlusCircle, ClipboardText } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { Task } from './components/Task'
import { CreateNewTask } from './components/CreateNewTask'

// Styles
import logosvg from './assets/to-do-logo.svg'
import './global.css'
import styles from './App.module.css'

export function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, cum.',
      done: true
    }
  ])

  function toggleTask(id: string) {
    const newTasks = tasks.filter(item => {
      if (id === item.id) {
        return ({
          id: item.id,
          content: item.content,
          done: !item.done
        })
      } else {
        return item
      }
    })

    setTasks(newTasks)
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter(item => {
      return id !== item.id
    })
    setTasks(newTasks)
  }

  function createNewTask(content:string) {
    const newTask = {
      id: uuidv4(),
      content: content,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <>
      <header className={styles.header}><img src={logosvg} alt="" /></header>
      
      <CreateNewTask onCreateNewTask={createNewTask}/>

      <main className={styles.main}>

        <section className={styles.infoBar}>
          <div className={styles.createdTasksDisplay}>
            <span className={styles.createdTasksLabel}>Tarefas criadas</span>
            <div className={styles.createdTasksNumber}>0</div>
          </div>

          <div className={styles.completedTasksDisplay}>
            <span className={styles.completedTasksLabel}>Tarefas criadas</span>
            <div className={styles.completedTasksNumber}>0</div>
          </div>
        </section>

        <section className={styles.tasksArea}>

          {tasks.length === 0 &&
            <div className={styles.emptyList}>
              <ClipboardText/>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div> 
          }
          
          {tasks.map(task => {
            return (
              <Task 
                key={task.id}
                id={task.id}
                content={task.content}
                done={task.done}
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
              />
            )
          })}

        </section>

      </main>
    </>
  )
}
