export enum TaskStatus {
  TODO = 'Todo',
  DOING = 'Doing',
  DONE = 'Done',
}

export interface ITask {
  id: number
  title: string
  description: string
  status: TaskStatus
}
