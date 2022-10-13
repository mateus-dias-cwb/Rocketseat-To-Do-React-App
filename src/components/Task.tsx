
import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

interface Task {
  id: string;
  content: string;
  done: boolean;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({id, content, done, onToggleTask, onDeleteTask}:Task) {

  function handleToggleTask() {
    onToggleTask(id)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <article className={styles.task + (done ?? styles.taskDone)}>
      <input type="checkbox" name="taskToggler" onClick={handleToggleTask} />
      <p>{content}</p>
      <button title='Deletar tarefa' onClick={handleDeleteTask}>
        <Trash size={20}/>
      </button>
    </article>
  )
}