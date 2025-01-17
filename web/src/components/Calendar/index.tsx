import { useCallback, useMemo, useState } from 'react'

import { CalendarIcon } from '@heroicons/react/outline'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY, UPDATE_TASK_MUTATION } from 'src/components/Task/EditTaskCell'
import MyEvent from '../Events'

type Props = {
  tasks: [
    {
      __typename?: 'Task'
      id: number
      plannedAt: string
      workerId: number
      customerId: number
      siteId: number
      containerId: number
      materialId: number
      serviceId: number
      start: string
      end: string
      title: string
      worker?: {
        name?: string
      }
      customer?: {
        name?: string
      }
      site?: {
        name?: string
      }
      service?: {
        name?: string
      }
      container?: {
        name?: string
      }
      material?: {
        name?: string
      }
    }
  ]
}

const Calenda = ({ tasks }: Props) => {
  const formatDate = (startTime: string) => {
    const time = new Date(startTime)
    const date = new Date(time.setHours(time.getHours()))
    return date
  }
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION, {
    onCompleted: () => {
      toast.success('Task updated')
      navigate(routes.tasks())
    },
    //onQueryUpdated: () => {},
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  //console.log(data.data?.task)
  const localize = momentLocalizer(moment)
  const DnDCalendar = withDragAndDrop(Calendar)
  const onSave = (
    input: { id: number; start: string; end: string },
    id: number
  ) => {
    const castInput = Object.assign(input, {
      id: input.id,
      start: formatDate(input.start || ''),
      end: formatDate(input.end || ''),
    })
    updateTask({ variables: { id, input: castInput } }).then((r) =>
      console.log(r)
    )
  }
  const lycos = tasks.map((task) => {
    return {
      id: task?.id,
      title: task.worker?.name,
      serviceName: task.service?.name,
      customerName: task.customer?.name,
      siteName: task.site?.name,
      containerName: task.container?.name,
      materialName: task.material?.name,
      workerName: task.worker?.name,
      start: task?.start,
      end: task?.end,
    }
  })
  const [events, setEvents] = useState(lycos)
  const [draggedEvent, setDraggedEvent] = useState()
  const [counters, setCounters] = useState(lycos)
  const moveEvent = useCallback(
    ({
      event,
      start,
      end,
      resourceId,
      isAllDay: droppedOnAllDaySlot = false,
    }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, resourceId, allDay }]
      })
      const id = event.id
      onSave({ id, start, end }, id)
    },
    [setEvents]
  )

  const customOnDragOver = useCallback(
    (dragEvent: DragEvent) => {
      if (draggedEvent !== 'undroppable') {
        dragEvent.preventDefault()
      }
    },
    [draggedEvent]
  )
  const newEvent = useCallback(() => {
    setEvents((prev) => {
      navigate(routes.newTask())
      return [...prev]
    })
  }, [setEvents])
  const formatName = (name: string, count: any) => `${name} ID ${count}`

  const onDropFromOutside = useCallback(
    ({ start, end, allDay: isAllDay }) => {
      if (draggedEvent === 'undroppable') {
        setDraggedEvent(null)
        return
      }

      const { name } = draggedEvent
      const lycos = {
        title: formatName(name, counters[name]),
        start,
        end,
        isAllDay,
      }
      setDraggedEvent(null)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newEvent(lycos)
    },

    [draggedEvent, counters, setDraggedEvent, setCounters, newEvent]
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSelectEvent = useCallback((event) => {
    navigate(routes.editTask({ id: event.id }))
  }, [])
  interface Props {
    event: {
      id: number
    }
    start: string
    end: string
  }
  const resizeEvent = useCallback(
    ({ event, start, end }: Props) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
      const id = event.id
      onSave({ id, start, end }, id)
    },
    [setEvents]
  )
  const eventPropGetter = useCallback(
    (event, start: string, end: string, isSelected: boolean) => ({
      ...(isSelected && {
        style: {
          className: '!bg-red-500',
        },
      }),
    }),
    []
  )
  const dayPropGetter = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (date: Date) => ({
      /*...(moment(date).day() === 1 && {
        className: '!bg-sky-500/50',
      }),
      ...(moment(date).day() === 2 && {
        className: '!bg-green-500/50',
      }),
      ...(moment(date).day() === 3 && {
        className: '!bg-yellow-500/50',
      }),
      ...(moment(date).day() === 4 && {
        className: '!bg-purple-500/50',
      }),
      ...(moment(date).day() === 5 && {
        className: '!bg-blue-500/50',
      }),*/
    }),
    []
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  const components = useMemo(() => ({
    event: MyEvent,
    defaultDate: new Date(),
  }))
  return (
    <>
      <DnDCalendar
        localizer={localize}
        the={true}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'work_week', 'day']}
        selectable={true}
        onDropFromOutside={onDropFromOutside}
        onDragOver={customOnDragOver}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        eventPropGetter={eventPropGetter}
        onSelectEvent={handleSelectEvent}
        resizable
        onSelectSlot={newEvent}
        messages={{
          next: <ArrowRightIcon className="w-5 h-5" />,
          previous: <ArrowLeftIcon className="w-5 h-5" />,
          today: <CalendarIcon className="w-5 h-5" />,
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          showColors: 'Afficher les couleurs',
          showMore: (total: number) => `${total} tâches`,
          showMoreTooltip: (total: number) => `+${total} tâches`,
          prev: <ArrowLeftIcon className="w-5 h-5" />,
          work_week: 'Semaine de travail',
        }}
        defaultDate={moment().toDate()}
        showMultiDayTimes={true}
        showAllEvents={false}
        dayPropGetter={dayPropGetter}
        components={components}
        popup={true}
        toolbar={true}
      />
    </>
  )
}
export default Calenda
