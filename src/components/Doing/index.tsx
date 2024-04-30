import { Card } from '../Card'
import { ITask } from '../ITask'
import { Task } from '../Task'

type DoingProps = {
  doings: ITask[]
  updateTask: (task: ITask) => void
  deleteTask: (id: number) => void
}

export const Doing = ({ doings, updateTask, deleteTask }: DoingProps) => {
  const title = 'Doing'
  return (
    <>
      <Card title={title}>
        {doings &&
          doings.map((doing, index) => (
            <div key={index}>
              <Task
                task={doing}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            </div>
          ))}
      </Card>
    </>
  )
}
