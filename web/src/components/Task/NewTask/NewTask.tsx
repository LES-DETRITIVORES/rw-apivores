import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TaskForm from 'src/components/Task/TaskForm'

const CREATE_TASK_MUTATION = gql`
  mutation CreateTaskMutation($id: Int!, $input: CreateTaskInput!) {
    createTask(id: $id, input: $input) {
      id
    }
  }
`

/*class FetchResult<T> {
  data: T
  errors: string[] = []
  extensions: {
    code: string
  }
  results?: any
  context: {
    headers: {
      get: (header: string) => string
    }
  }
  constructor(data: T) {
    this.data = data
  }
}*/

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
    start: string
    end: string
  }

  const onSave = (input: Inputs) => {
    // generate id for new task
    const castInput = Object.assign(input, {
      // id: id,
      id: parseInt(input.id),
      workerId: parseInt(input.workerId),
      customerId: parseInt(input.customerId),
      siteId: parseInt(input.siteId),
      containerId: parseInt(input.containerId),
      materialId: parseInt(input.materialId),
      serviceId: parseInt(input.serviceId),
      start: input.start,
      end: input.end,
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createTask({ variables: { id: input.id, input: castInput } }).then(
      (result) => {
        console.log('result: ', result)
        result.data.createTask.id = parseInt(result.data.createTask.id)
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
