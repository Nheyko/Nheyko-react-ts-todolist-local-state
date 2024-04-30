import { ITask } from '../ITask'
import { Card } from '../Card'
import { TaskForm } from '../TaskForm'

type NewTaskProps = {
  createTask: (task: ITask) => void
}

export const NewTask = ({ createTask }: NewTaskProps) => {
  const title = 'New Task'

  return (
    <>
      <Card title={title}>
        <TaskForm createTask={createTask} />
      </Card>
    </>
  )
}
