import { ITask } from '../ITask'
import { TaskForm } from '../TaskForm'
import { nanoid } from 'nanoid'

type TaskProps = {
  task: ITask
  updateTask: (task: ITask) => void
  deleteTask: (id: number) => void
}

export const Task = ({
  task,
  updateTask,
  deleteTask,
}: TaskProps): JSX.Element => {
  return (
    <>
      <TaskForm
        key={nanoid()}
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </>
  )
}
