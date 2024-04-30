import { Card } from '../Card'
import { ITask } from '../ITask'
import { Task } from '../Task'

type TodoProps = {
  todos: ITask[]
  updateTask: (task: ITask) => void
  deleteTask: (id: number) => void
}

export const Todo = ({ todos, updateTask, deleteTask }: TodoProps) => {
  const title = 'Todo'
  return (
    <>
      <Card title={title}>
        {todos &&
          todos.map((todo, index) => (
            <div key={index}>
              <Task
                task={todo}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            </div>
          ))}
      </Card>
    </>
  )
}
