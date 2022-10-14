import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './CreateNewTask.module.css'

interface CreateNewTask {
  onCreateNewTask: (content: string) => void
}

export function CreateNewTask({onCreateNewTask}: CreateNewTask) {

  const [newTaskContent, setNewTaskContent] = useState("")

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onCreateNewTask(newTaskContent)
  }

  function handleInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)
  }

  return (
    <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
      <input 
        className={styles.taskInput}
        type="text"
        name="newTaskContent"
        placeholder='Adicione uma nova tarefa'
        onChange={handleInputTextChange}
      />
      <button className={styles.taskButton} type="submit">
        Criar <PlusCircle/>
      </button>
    </form>
  )
}