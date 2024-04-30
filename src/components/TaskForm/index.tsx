import { useForm, SubmitHandler } from 'react-hook-form'
import { ITask, TaskStatus } from '../ITask'
import { useState } from 'react'
import {
  InputIdCss,
  FormCss,
  InputCss,
  ButtonsDivCss,
  ButtonCss,
  LabelCss,
  TextAreaCss,
  DivCss,
  OptionCss,
  SelectCss,
  ButtonDivCss,
  LabelIdCss,
} from './index.style'

type taskFormProps = {
  task?: ITask
  createTask?: (task: ITask) => void
  updateTask?: (task: ITask) => void
  deleteTask?: (id: number) => void
}

export const TaskForm = ({
  task,
  createTask,
  updateTask,
  deleteTask,
}: taskFormProps) => {
  const { register, handleSubmit, watch } = useForm<ITask>()
  const [currentId, setCurrentId] = useState<number>(7)
  const [isUpdated, setIsUpdated] = useState<boolean>(false)
  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  const initialTitle = task ? task.title : ''
  const currentTitle = watch('title')
  const isTitleSame = initialTitle === currentTitle

  const initialDescription = task ? task.description : ''
  const currentDescription = watch('description')
  const isDescriptionSame = initialDescription === currentDescription

  const initialStatus = task ? task.status : TaskStatus.TODO
  const currentStatus = watch('status')
  const isStatusSame = initialStatus === currentStatus

  const onSubmit: SubmitHandler<any> = (data) => {
    setCurrentId(currentId + 1)
    const createdTask = { ...data, id: Number(currentId) }
    const updatedTask = { ...task, ...data, id: Number(task?.id) }
    const deletedTask = Number(task?.id)

    if (!task && createTask) {
      createTask(createdTask)
    }

    if (task && isUpdated && updateTask) {
      updateTask(updatedTask)
      setIsUpdated(false)
    }

    if (task && isDeleted && deleteTask) {
      deleteTask(deletedTask)
      setIsDeleted(false)
    }
  }

  return (
    <>
      <FormCss onSubmit={handleSubmit(onSubmit)}>
        <DivCss>
          <LabelCss>
            Title :
            <InputCss
              defaultValue={initialTitle}
              {...register('title', {
                required: true,
                minLength: 1,
                maxLength: 10,
              })}
              required
              minLength={1}
              maxLength={10}
            />
          </LabelCss>
        </DivCss>

        <DivCss>
          <LabelCss>
            Description :
            <TextAreaCss
              defaultValue={initialDescription}
              {...register('description', {
                required: true,
                minLength: 1,
                maxLength: 255,
              })}
              required
              minLength={1}
              maxLength={255}
            />
          </LabelCss>
        </DivCss>

        <DivCss>
          <LabelCss>
            Status :
            <SelectCss
              defaultValue={initialStatus}
              {...register('status', { required: true })}
              required
            >
              <OptionCss value={TaskStatus.TODO}>To do</OptionCss>
              <OptionCss value={TaskStatus.DOING}>Doing</OptionCss>
              <OptionCss value={TaskStatus.DONE}>Done</OptionCss>
            </SelectCss>
          </LabelCss>
        </DivCss>

        <DivCss>
          <LabelIdCss>
            ID :
            <InputIdCss
              value={task ? task.id : currentId}
              {...register('id', { required: true, valueAsNumber: true })}
              readOnly
              required
              type="number"
            />
          </LabelIdCss>
        </DivCss>

        {task ? (
          <ButtonsDivCss>
            <ButtonDivCss>
              <ButtonCss
                type="submit"
                onClick={() => {
                  setIsUpdated(true)
                }}
                disabled={
                  (isTitleSame && isDescriptionSame && isStatusSame) ||
                  currentTitle === undefined
                }
              >
                <span
                  style={{
                    color:
                      (isTitleSame && isDescriptionSame && isStatusSame) ||
                      currentTitle === undefined
                        ? 'gray'
                        : 'Black',
                    cursor:
                      (isTitleSame && isDescriptionSame && isStatusSame) ||
                      currentTitle === undefined
                        ? 'not-allowed'
                        : 'pointer',
                  }}
                >
                  Update
                </span>
              </ButtonCss>
            </ButtonDivCss>

            <ButtonDivCss>
              <ButtonCss
                type="submit"
                onClick={() => {
                  setIsDeleted(true)
                }}
              >
                Delete
              </ButtonCss>
            </ButtonDivCss>
          </ButtonsDivCss>
        ) : (
          <ButtonCss type="submit">Create</ButtonCss>
        )}
      </FormCss>
    </>
  )
}
