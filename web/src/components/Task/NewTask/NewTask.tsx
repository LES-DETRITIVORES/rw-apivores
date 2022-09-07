import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TaskForm from 'src/components/Task/TaskForm'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const NewTask = () => {
  const [createTask, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task created')
      navigate(routes.tasks())
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })
  type Inputs = {
    id?: number | any
    plannedAt: string
    serviceId: number | any
    workerId: number | any
    materialId: number | any
    containerId: number | any
    customerId: number | any
    siteId: number | any
  }
  const onSave = (input: Inputs) => {
    // generate id for new task

    const id = 1
    const castInput = Object.assign(input, {
      // id: id,
      id: parseInt(input.id),
      workerId: parseInt(input.workerId),
      customerId: parseInt(input.customerId),
      siteId: parseInt(input.siteId),
      containerId: parseInt(input.containerId),
      materialId: parseInt(input.materialId),
      serviceId: parseInt(input.serviceId),
    })
    createTask({ variables: { id: input.id, input: castInput } }).then(
      (result) => {
        console.log('result: ', result)
      }
    )
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Task</h2>
      </header>
      <div className="rw-segment-main">
        <TaskForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTask
