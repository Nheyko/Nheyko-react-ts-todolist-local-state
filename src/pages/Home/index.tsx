import { useState } from 'react'
import { ITask, TaskStatus } from '../../components/ITask'
import { Todo } from '../../components/Todo'
import { Doing } from '../../components/Doing'
import { Done } from '../../components/Done'
import { NewTask } from '../../components/NewTask'

const Home = () => {
  let initialTasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.TODO,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      status: TaskStatus.TODO,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      status: TaskStatus.DOING,
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description 4',
      status: TaskStatus.DOING,
    },
    {
      id: 5,
      title: 'Task 5',
      description: 'Description 5',
      status: TaskStatus.DONE,
    },
    {
      id: 6,
      title: 'Task 6',
      description: 'Description 6',
      status: TaskStatus.DONE,
    },
  ]

  const [tasks, setTasks] = useState<ITask[]>(initialTasks)
  const todos = tasks.filter((task) => task.status === 'Todo')
  const doings = tasks.filter((task) => task.status === 'Doing')
  const dones = tasks.filter((task) => task.status === 'Done')

  const createTask = (task: ITask) => {
    setTasks([...tasks, task])
  }

  const updateTask = (task: ITask) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <>
      <Todo todos={todos} updateTask={updateTask} deleteTask={deleteTask} />
      <Doing doings={doings} updateTask={updateTask} deleteTask={deleteTask} />
      <Done dones={dones} updateTask={updateTask} deleteTask={deleteTask} />
      <NewTask createTask={createTask} />
    </>
  )
}

export default Home
