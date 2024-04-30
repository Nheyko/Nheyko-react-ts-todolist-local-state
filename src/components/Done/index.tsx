import { Card } from '../Card'
import { ITask } from '../ITask'
import { Task } from '../Task'
import { DivCss } from './index.style'

type DonesProps = {
  dones: ITask[]
  updateTask: (task: ITask) => void
  deleteTask: (id: number) => void
}

export const Done = ({ dones, updateTask, deleteTask }: DonesProps) => {
  const title = 'Done'
  return (
    <>
      <Card title={title}>
        {dones &&
          dones.map((done, index) => (
            <DivCss key={index}>
              <Task
                task={done}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            </DivCss>
          ))}
      </Card>
    </>
  )
}
